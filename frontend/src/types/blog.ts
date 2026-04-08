// Blog type — field names match backend model exactly.
// Do NOT rename or alias any field.

export interface Blog {
  id: string;
  website_id: string;
  category_id: string | null;
  author_id: string | null;
  author: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  featured_image: string | null;
  banner_image: string | null;
  status: string;
  visibility: string;
  is_featured: boolean;
  allow_comments: boolean;
  published_at: string | null;
  scheduled_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  canonical_url: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  created_at: string;
  updated_at: string;
}

// ── Category type — matches backend categories table ─────────────────────────
export interface Category {
  id: string;
  name: string;
}

// ── Author type — matches backend users table ─────────────────────────────────
export interface Author {
  id: string;
  name: string;
}

// ── Filter types used by service layer and BlogListPage ───────────────────────
export type FilterKey =
  | "category"
  | "country"
  | "course_category"
  | "student_level"
  | "university_type"
  | "application_support_type"
  | "year";

export type ActiveFilters = Record<FilterKey, string[]>;
