// ─────────────────────────────────────────────────────────────────────────────
// Category Service — abstraction layer for blog categories.
//
// CURRENT IMPLEMENTATION: returns mock categories.
//
// HOW TO CONNECT BACKEND LATER:
//   Replace the function body with:
//     const response = await apiClient.get<Category[]>("/categories/");
//     return response.data;
// ─────────────────────────────────────────────────────────────────────────────

import { Category } from "@/types/blog";

const mockCategories: Category[] = [
  { id: 1, name: "Study Abroad Guide" },
  { id: 2, name: "MBBS Abroad" },
  { id: 3, name: "Scholarships" },
  { id: 4, name: "Visa Guide" },
  { id: 5, name: "Student Life" },
];

const fakeDelay = (): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, 0));

/**
 * Returns all categories.
 *
 * TODO: BACKEND — replace body with:
 *   const response = await apiClient.get<Category[]>("/categories/");
 *   return response.data;
 */
export async function getCategories(): Promise<Category[]> {
  await fakeDelay();
  return mockCategories;
}
