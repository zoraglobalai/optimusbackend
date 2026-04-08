import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiResponse, AuthResponse, LoginRequest, SignUpRequest } from '../types/auth';

const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL;
if (!rawApiBaseUrl) {
  throw new Error("VITE_API_BASE_URL is required");
}
const API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, "");

// ─── Helpers ──────────────────────────────────────────────────────────────────

function extractErrorMessage(error: unknown, fallback: string): Error {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiResponse | undefined;
    const msg = data?.message || data?.error || error.message;
    return new Error(msg || fallback);
  }
  if (error instanceof Error) return error;
  return new Error(fallback);
}

function clearSession() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
}

// ─── Shared Axios Instance ────────────────────────────────────────────────────

export const apiInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// ─── Refresh token state (module-level, shared across all callers) ────────────
let refreshPromise: Promise<string> | null = null;

async function refreshAccessToken(): Promise<string> {
  // Deduplicate — if a refresh is already in flight, reuse it
  if (refreshPromise) return refreshPromise;

  refreshPromise = (async () => {
    try {
      const storedRefreshToken = localStorage.getItem('refreshToken');
      const body = storedRefreshToken ? { refreshToken: storedRefreshToken } : {};

      const response = await axios.post<ApiResponse<{ accessToken: string }>>(
        `${API_BASE_URL}/auth/refresh`,
        body,
        { withCredentials: true },
      );

      const newToken = response.data.data?.accessToken;
      if (!newToken) throw new Error('No access token in refresh response');

      localStorage.setItem('accessToken', newToken);
      return newToken;
    } finally {
      refreshPromise = null;
    }
  })();

  return refreshPromise;
}

// ─── Request interceptor: attach Bearer token ─────────────────────────────────
apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ─── Response interceptor: 401 → refresh → retry ─────────────────────────────
apiInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as any;

    const isAuthEndpoint =
      original?.url?.includes('/auth/login') ||
      original?.url?.includes('/auth/signup') ||
      original?.url?.includes('/auth/refresh');

    if (error.response?.status === 401 && !original._retry && !isAuthEndpoint) {
      original._retry = true;

      try {
        const newToken = await refreshAccessToken();
        original.headers.Authorization = `Bearer ${newToken}`;
        return apiInstance(original);
      } catch {
        clearSession();
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);

// ─── Auth API class (uses shared instance) ────────────────────────────────────

class ApiService {
  async refreshAccessToken(): Promise<string> {
    return refreshAccessToken();
  }

  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      const res = await apiInstance.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
      return res.data.data!;
    } catch (error) {
      throw extractErrorMessage(error, 'Login failed. Please try again.');
    }
  }

  async signup(data: SignUpRequest): Promise<AuthResponse> {
    try {
      const res = await apiInstance.post<ApiResponse<AuthResponse>>('/auth/signup', data);
      return res.data.data!;
    } catch (error) {
      throw extractErrorMessage(error, 'Registration failed. Please try again.');
    }
  }

  async logout(): Promise<void> {
    try {
      await apiInstance.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearSession();
    }
  }

  async getMe(): Promise<ApiResponse<{ user: any }>> {
    try {
      const res = await apiInstance.get<ApiResponse<{ user: any }>>('/auth/me');
      return res.data;
    } catch (error) {
      throw extractErrorMessage(error, 'Failed to fetch user.');
    }
  }

  async getAdminDashboard(): Promise<ApiResponse<any>> {
    const res = await apiInstance.get<ApiResponse<any>>('/admin/dashboard');
    return res.data;
  }
}

export default new ApiService();
