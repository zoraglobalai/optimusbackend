import 'reflect-metadata';
import { createRequire } from 'node:module';
import express, { Express, RequestHandler } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import type { HelmetOptions } from 'helmet';
import authRoutes from './modules/auth/auth.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { corsMiddleware } from './middlewares/cors.middleware.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { roleMiddleware } from './middlewares/role.middleware.js';
import courseRoutes from './modules/course/Course.routes.js';
import { getDatabaseStatus, initializeDatabase } from './config/data-source.js';

const require = createRequire(import.meta.url);
const helmet = require('helmet') as (options?: Readonly<HelmetOptions>) => RequestHandler;

export const createApp = (): Express => {
  const app = express();

  // Security Middleware
  app.use(helmet());

  // Logging Middleware
  app.use(morgan('combined'));

  // Body Parser Middleware
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ limit: '10mb', extended: true }));

  // Cookie Parser
  app.use(cookieParser());

  // Custom CORS Middleware
  app.use(corsMiddleware);

  // Health Check
    console.log('🔥 APP FILE LOADED');
  app.get('/health', (_req, res) => {
    res.json({
      status: 'ok',
      message: 'Server is running',
      timestamp: new Date().toISOString(),
    });
  });

  app.get('/health/startup', (_req, res) => {
    const db = getDatabaseStatus();

    res.json({
      status: 'ok',
      message: 'Startup diagnostics',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      database: db,
    });
  });

  app.use('/api', async (_req, _res, next) => {
    try {
      await initializeDatabase();
      next();
    } catch (error) {
      next(error);
    }
  });

  // Auth Routes
  app.use('/api/auth', authRoutes);
  console.log("Yesssss not")
  app.use('/api/courses', authMiddleware, courseRoutes);
  // Admin Example Route (Protected + Role-based)
  app.get(
    '/api/admin/dashboard',
    authMiddleware,
    roleMiddleware('ADMIN'),
    (_req, res) => {
      res.json({
        success: true,
        message: 'Welcome to admin dashboard',
        data: {
          adminPanel: true,
          features: ['User Management', 'Analytics', 'Settings'],
        },
      });
    }
  );

  // User Profile Route (Protected)
  app.get('/api/user/profile', authMiddleware, (req, res) => {
    res.json({
      success: true,
      message: 'User profile fetched',
      data: {
        user: (req as any).user,
      },
    });
  });

  // 404 Handler
  app.use((_req, res) => {
    res.status(404).json({
      success: false,
      message: 'Route not found',
      error: 'The requested resource does not exist',
      timestamp: new Date().toISOString(),
    });
  });

  // Error Handler (Must be last)
  app.use(errorHandler);

  return app;
};
