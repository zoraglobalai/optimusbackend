import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/jwt.js';
import { errorResponse } from '../utils/response.js';

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email: string;
        role: string;
      };
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      const { statusCode, body } = errorResponse('Missing or invalid authorization header', 401);
      res.status(statusCode).json(body);
      return;
    }

    const token = authHeader.slice(7); // Remove 'Bearer ' prefix
    const payload = verifyAccessToken(token);

    (req as any).user = {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
    };

    next();
  } catch (error) {
    const { statusCode, body } = errorResponse(
      error instanceof Error ? error.message : 'Invalid token',
      401
    );
    res.status(statusCode).json(body);
  }
};
