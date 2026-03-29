export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

export const successResponse = <T>(
  message: string,
  data?: T,
  statusCode: number = 200
): { statusCode: number; body: ApiResponse<T> } => {
  return {
    statusCode,
    body: {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    },
  };
};

export const errorResponse = (
  message: string,
  statusCode: number = 400,
  error?: string
): { statusCode: number; body: ApiResponse } => {
  return {
    statusCode,
    body: {
      success: false,
      message,
      error: error || message,
      timestamp: new Date().toISOString(),
    },
  };
};
