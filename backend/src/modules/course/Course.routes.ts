import { Router } from 'express';
import {
  listCoursesHandler,
  getCourseByIdHandler,
  courseStatsHandler,
} from '../course/Course.controller.js';

const router = Router();

console.log("yessss reached")

/**
 * GET /courses
 * Query params:
 *   country     - filter by location (partial match)
 *   course      - filter by course title (partial match)
 *   university  - filter by university name (partial match)
 *   sortBy      - "relevance" (default) | "qs_rating"
 *   page        - page number (default: 1)
 *   limit       - results per page (default: 10, max: 100)
 */
router.get('/', listCoursesHandler);

/**
 * GET /courses/stats
 * Returns overview counts, top universities, and top locations.
 * Must be declared BEFORE /:id so Express doesn't treat "stats" as an id.
 */
router.get('/stats', courseStatsHandler);

/**
 * GET /courses/:id
 * Returns full course details including scholarships,
 * academic requirements, and application filings.
 */
router.get('/:id', getCourseByIdHandler);

export default router;