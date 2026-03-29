import { Request, Response } from 'express';

import { errorResponse, successResponse } from '../../utils/response.js';
import { getCourseById, getCourseStats, listCourses } from './Course.service.js';

// GET /courses?country=&course=&university=&sortBy=&page=&limit=
export async function listCoursesHandler(req: Request, res: Response): Promise<void> {
  try {
    const {
      country,
      course,
      university,
      sortBy,
      page,
      limit,
    } = req.query as Record<string, string | undefined>;

    const result = await listCourses({
      country,
      course,
      university,
      sortBy: sortBy === 'qs_rating' ? 'qs_rating' : 'relevance',
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? Math.min(parseInt(limit, 10), 100) : 10,
    });

    const { statusCode, body } = successResponse('Courses fetched successfully', result);
    res.status(statusCode).json(body);
  } catch (error) {
    const { statusCode, body } = errorResponse(
      error instanceof Error ? error.message : 'Failed to fetch courses',
      500,
    );
    res.status(statusCode).json(body);
  }
}

// GET /courses/stats
export async function courseStatsHandler(_req: Request, res: Response): Promise<void> {
  try {
    const stats = await getCourseStats();
    const { statusCode, body } = successResponse('Stats fetched successfully', stats);
    res.status(statusCode).json(body);
  } catch (error) {
    const { statusCode, body } = errorResponse(
      error instanceof Error ? error.message : 'Failed to fetch stats',
      500,
    );
    res.status(statusCode).json(body);
  }
}

// GET /courses/:id
export async function getCourseByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const course = await getCourseById(id);

    if (!course) {
      const { statusCode, body } = errorResponse('Course not found', 404);
      res.status(statusCode).json(body);
      return;
    }

    const { statusCode, body } = successResponse('Course fetched successfully', course);
    res.status(statusCode).json(body);
  } catch (error) {
    const { statusCode, body } = errorResponse(
      error instanceof Error ? error.message : 'Failed to fetch course',
      500,
    );
    res.status(statusCode).json(body);
  }
}