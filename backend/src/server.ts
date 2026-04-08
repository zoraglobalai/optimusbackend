import 'dotenv/config';
import env from './config/env.js';
import { createApp } from './app.js';
import { initializeDatabase } from './config/data-source.js';

let server: any;

const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const bootstrapDatabase = async (): Promise<void> => {
  const finiteAttempts = Math.max(env.db_startup.retries, 1);
  const totalAttempts = env.db_startup.require_on_startup ? finiteAttempts : Number.POSITIVE_INFINITY;
  const retryDelayMs = Math.max(env.db_startup.retry_delay_ms, 1000);

  let attempt = 1;
  while (attempt <= totalAttempts) {
    try {
      await initializeDatabase();
      const label = Number.isFinite(totalAttempts) ? `${attempt}/${totalAttempts}` : `${attempt}`;
      console.info(`Database connected on attempt ${label}`);
      return;
    } catch (error) {
      const isLastAttempt = Number.isFinite(totalAttempts) && attempt === totalAttempts;
      const label = Number.isFinite(totalAttempts) ? `${attempt}/${totalAttempts}` : `${attempt}`;
      console.error(`Database connection attempt ${label} failed:`, error);

      if (isLastAttempt) {
        if (env.db_startup.require_on_startup) {
          throw error;
        }
        console.warn(
          'Database is still unavailable. API server will keep running, but DB-backed routes may fail.'
        );
        return;
      }

      await sleep(retryDelayMs);
      attempt += 1;
    }
  }
};

const startServer = async (): Promise<void> => {
  try {
    const app = createApp();

    if (env.db_startup.require_on_startup) {
      await bootstrapDatabase();
    } else {
      void bootstrapDatabase();
    }

    server = app.listen(env.port, '0.0.0.0', () => {
      console.info(`Server running on http://0.0.0.0:${env.port}`);
      console.info(`Public URL: ${env.frontend_url}`);
      console.info(`Environment: ${env.node_env.toUpperCase()}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

const gracefulShutdown = async (signal: string): Promise<void> => {
  console.info(`\n${signal} received, gracefully shutting down...`);

  if (server) {
    server.close(() => {
      console.info('Server closed');
    });
  }

  setTimeout(() => {
    console.info('Force terminating...');
    process.exit(0);
  }, 5000);
};

process.on('SIGTERM', () => void gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => void gracefulShutdown('SIGINT'));

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', error => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

startServer();
