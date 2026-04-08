// ─────────────────────────────────────────────────────────────────────────────
// Author Service — abstraction layer for blog authors (users).
//
// CURRENT IMPLEMENTATION: returns mock authors.
//
// HOW TO CONNECT BACKEND LATER:
//   Replace the function body with:
//     const response = await apiClient.get<Author[]>("/users/");
//     return response.data;
// ─────────────────────────────────────────────────────────────────────────────

import { Author } from "@/types/blog";

const mockAuthors: Author[] = [
  { id: 1, name: "Optimus Counselling Team" },
  { id: 2, name: "Admissions Expert" },
  { id: 3, name: "Visa & Documentation Team" },
];

const fakeDelay = (): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, 0));

/**
 * Returns all authors.
 *
 * TODO: BACKEND — replace body with:
 *   const response = await apiClient.get<Author[]>("/users/");
 *   return response.data;
 */
export async function getAuthors(): Promise<Author[]> {
  await fakeDelay();
  return mockAuthors;
}
