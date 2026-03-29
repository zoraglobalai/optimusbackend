import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service.js';
import { SignUpDTO, LoginDTO, RefreshTokenDTO } from './auth.dto.js';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { successResponse, errorResponse } from '../../utils/response.js';

export class AuthController {
  private authService = new AuthService();

  signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const signupDTO = plainToInstance(SignUpDTO, req.body);
      const errors = await validate(signupDTO);

      if (errors.length > 0) {
        const errorMessages = errors
          .map(error => Object.values(error.constraints || {}).join(', '))
          .join('; ');
        const { statusCode, body } = errorResponse(errorMessages, 400);
        res.status(statusCode).json(body);
        return;
      }

      const result = await this.authService.signup(signupDTO);

      // Set refresh token as httpOnly cookie
      res.cookie('refreshToken', result.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      const { statusCode, body } = successResponse('User registered successfully', result, 201);
      res.status(statusCode).json(body);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const loginDTO = plainToInstance(LoginDTO, req.body);
      const errors = await validate(loginDTO);

      if (errors.length > 0) {
        const errorMessages = errors
          .map(error => Object.values(error.constraints || {}).join(', '))
          .join('; ');
        const { statusCode, body } = errorResponse(errorMessages, 400);
        res.status(statusCode).json(body);
        return;
      }

      const result = await this.authService.login(loginDTO);

      // Set refresh token as httpOnly cookie
      res.cookie('refreshToken', result.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      const { statusCode, body } = successResponse('Login successful', result, 200);
      res.status(statusCode).json(body);
    } catch (error) {
      next(error);
    }
  };

  refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const refreshTokenDTO = plainToInstance(RefreshTokenDTO, {
        refreshToken: req.cookies.refreshToken || req.body.refreshToken,
      });
      const errors = await validate(refreshTokenDTO);

      if (errors.length > 0) {
        const { statusCode, body } = errorResponse('Refresh token is required', 401);
        res.status(statusCode).json(body);
        return;
      }

      const result = await this.authService.refreshAccessToken(refreshTokenDTO.refreshToken);
      const { statusCode, body } = successResponse('Token refreshed successfully', result, 200);
      res.status(statusCode).json(body);
    } catch (error) {
      next(error);
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = (req as any).user?.userId;

      if (!userId) {
        const { statusCode, body } = errorResponse('User not authenticated', 401);
        res.status(statusCode).json(body);
        return;
      }

      await this.authService.logout(userId);

      // Clear refresh token cookie
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });

      const { statusCode, body } = successResponse('Logged out successfully');
      res.status(statusCode).json(body);
    } catch (error) {
      next(error);
    }
  };

  getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = (req as any).user?.userId;

      if (!userId) {
        const { statusCode, body } = errorResponse('User not authenticated', 401);
        res.status(statusCode).json(body);
        return;
      }

      const user = await this.authService.getUserById(userId);
      const { statusCode, body } = successResponse('User fetched successfully', user);
      res.status(statusCode).json(body);
    } catch (error) {
      next(error);
    }
  };
}
