import axios, { AxiosInstance } from "axios";

const rawBlogApiBaseUrl = import.meta.env.VITE_BLOG_API_URL;
if (!rawBlogApiBaseUrl) {
  throw new Error("VITE_BLOG_API_URL is required");
}

const BLOG_API_BASE_URL = rawBlogApiBaseUrl.replace(/\/+$/, "");

export const publicApiInstance: AxiosInstance = axios.create({
  baseURL: BLOG_API_BASE_URL,
  withCredentials: false
});

export const PUBLIC_WEBSITE_SLUG =
  import.meta.env.VITE_PUBLIC_WEBSITE_SLUG ||
  import.meta.env.VITE_WEBSITE_SLUG ||
  "optimus-overseas";

export const ENQUIRY_WEBSITE_SLUG =
  import.meta.env.VITE_ENQUIRY_WEBSITE_SLUG || PUBLIC_WEBSITE_SLUG;
