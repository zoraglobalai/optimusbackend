import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/response.js';

export const roleMiddleware = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const userRole = (req as any).user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      const { statusCode, body } = errorResponse(
        'You do not have permission to access this resource',
        403
      );
      res.status(statusCode).json(body);
      return;
    }

    next();
  };
};
