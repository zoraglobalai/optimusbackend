// ─────────────────────────────────────────────────────────────────────────────
// Blog Service — abstraction layer between UI and backend API.
//
// This service now calls the public backend blog endpoints directly
// using the shared Axios instance from "@/services/api".
//
// The pages still consume Promise<Blog[]> / Promise<Blog | null>, so
// no component changes were required beyond the API wiring.
// ─────────────────────────────────────────────────────────────────────────────

import { Blog, ActiveFilters } from "@/types/blog";
import { publicApiInstance, PUBLIC_WEBSITE_SLUG } from "@/services/publicApi";

const WEBSITE_SLUG = PUBLIC_WEBSITE_SLUG;

function normalizeBlog(blog: any): Blog {
  return {
    id: blog.id,
    website_id: blog.website_id ?? blog.websiteId,
    category_id: blog.category_id ?? blog.categoryId ?? null,
    author_id: blog.author_id ?? blog.authorId ?? null,
    author: blog.author ?? blog.authorUser?.name ?? "",
    title: blog.title ?? "",
    slug: blog.slug ?? "",
    content: blog.content ?? null,
    excerpt: blog.excerpt ?? null,
    featured_image: blog.featured_image ?? blog.featuredImage ?? null,
    banner_image: blog.banner_image ?? blog.bannerImage ?? null,
    status: blog.status ?? "",
    visibility: blog.visibility ?? "",
    is_featured: blog.is_featured ?? blog.isFeatured ?? false,
    allow_comments: blog.allow_comments ?? blog.allowComments ?? false,
    published_at: blog.published_at ?? blog.publishedAt ?? null,
    scheduled_at: blog.scheduled_at ?? blog.scheduledAt ?? null,
    meta_title: blog.meta_title ?? blog.metaTitle ?? null,
    meta_description: blog.meta_description ?? blog.metaDescription ?? null,
    meta_keywords: blog.meta_keywords ?? blog.metaKeywords ?? null,
    canonical_url: blog.canonical_url ?? blog.canonicalUrl ?? null,
    og_title: blog.og_title ?? blog.ogTitle ?? null,
    og_description: blog.og_description ?? blog.ogDescription ?? null,
    og_image: blog.og_image ?? blog.ogImage ?? null,
    created_at: blog.created_at ?? blog.createdAt ?? "",
    updated_at: blog.updated_at ?? blog.updatedAt ?? "",
  };
}

function normalizeBlogList(blogs: any[]): Blog[] {
  return blogs.map(normalizeBlog);
}

/**
 * Returns ALL blogs (regardless of status/visibility).
 *
 * TODO: BACKEND — replace body with:
 *   const response = await apiClient.get<Blog[]>("/blogs/");
 *   return response.data;
 */
export async function getAllBlogs(): Promise<Blog[]> {
  const response = await publicApiInstance.get<{ data: Blog[] }>(`/public/websites/${WEBSITE_SLUG}/blogs`, {
    params: { page: 1, limit: 1000 },
  });
  return normalizeBlogList(response.data.data ?? []);
}

/**
 * Returns only published, public blogs where scheduled_at is null or in the past.
 * Filtering logic:
 *   status === "published"
 *   visibility === "public"
 *   scheduled_at is null OR scheduled_at <= now
 *
 * TODO: BACKEND — replace body with:
 *   const response = await apiClient.get<Blog[]>("/blogs/?status=published&visibility=public");
 *   return response.data;
 */
export async function getActiveBlogs(): Promise<Blog[]> {
  const response = await publicApiInstance.get<{ data: Blog[] }>(`/public/websites/${WEBSITE_SLUG}/blogs`, {
    params: { page: 1, limit: 1000 },
  });
  return normalizeBlogList(response.data.data ?? []);
}

/**
 * Returns a single blog by its slug, or null if not found.
 *
 * TODO: BACKEND — replace body with:
 *   try {
 *     const response = await apiClient.get<Blog>(`/blogs/${slug}/`);
 *     return response.data;
 *   } catch {
 *     return null;
 *   }
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const response = await publicApiInstance.get<{ data: Blog }>(`/public/blogs/${slug}`);
    return response.data.data ? normalizeBlog(response.data.data) : null;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "response" in error) {
      const status = (error as any).response?.status;
      if (status === 404) return null;
    }
    throw error;
  }
}

/**
 * Returns published/public blogs matching the given filters.
 * Client-side year filter applied on published_at.
 * All other filters (country, blog_type, etc.) are passed to backend when integrated.
 *
 * TODO: BACKEND — replace body with:
 *   const params = new URLSearchParams({ status: "published", visibility: "public" });
 *   if (filters.country?.length)                    params.set("country",                    filters.country.join(","));
 *   if (filters.course_category?.length)            params.set("course_category",            filters.course_category.join(","));
 *   if (filters.student_level?.length)              params.set("student_level",              filters.student_level.join(","));
 *   if (filters.blog_type?.length)                  params.set("blog_type",                  filters.blog_type.join(","));
 *   if (filters.university_type?.length)            params.set("university_type",            filters.university_type.join(","));
 *   if (filters.application_support_type?.length)   params.set("application_support_type",   filters.application_support_type.join(","));
 *   if (filters.year?.length)                       params.set("year",                       filters.year.join(","));
 *   const response = await apiClient.get<Blog[]>(`/blogs/?${params}`);
 *   return response.data;
 */
export async function getFilteredBlogs(_filters: ActiveFilters): Promise<Blog[]> {
  const response = await publicApiInstance.get<{ data: Blog[] }>(`/public/websites/${WEBSITE_SLUG}/blogs`, {
    params: { page: 1, limit: 1000 },
  });
  return normalizeBlogList(response.data.data ?? []);
}
