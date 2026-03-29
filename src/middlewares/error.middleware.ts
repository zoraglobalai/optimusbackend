import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/response.js';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('Error:', err);

  if (err instanceof AppError) {
    const { statusCode, body } = errorResponse(err.message, err.statusCode, err.message);
    res.status(statusCode).json(body);
    return;
  }

  if (err.message === 'Invalid credentials') {
    const { statusCode, body } = errorResponse('Invalid email or password', 401);
    res.status(statusCode).json(body);
    return;
  }

  if (err.message === 'Email already registered') {
    const { statusCode, body } = errorResponse(
      'Email is already registered. Please use another email or login.',
      400
    );
    res.status(statusCode).json(body);
    return;
  }

  if (err.message === 'User not found') {
    const { statusCode, body } = errorResponse('User not found', 404);
    res.status(statusCode).json(body);
    return;
  }

  if (err.message.includes('token')) {
    const { statusCode, body } = errorResponse('Invalid or expired token', 401);
    res.status(statusCode).json(body);
    return;
  }

  // Default error
  const { statusCode, body } = errorResponse(
    'Internal server error',
    500,
    process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred'
  );
  res.status(statusCode).json(body);
};
