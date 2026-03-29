import 'dotenv/config';
import env from './config/env.js';
import { createApp } from './app.js';
import { initializeDatabase } from './config/data-source.js';

let server: any;

const startServer = async (): Promise<void> => {
  try {
    // Initialize Database
    await initializeDatabase();

    // Create and start app
    const app = createApp();
 server = app.listen(env.port, '0.0.0.0', () => {
  console.info(`
╔════════════════════════════════════════════════════════╗
║                                                        ║
║       ✅ OPTIMUS AUTH SERVER STARTED                  ║
║                                                        ║
║  🚀 Server running on: http://0.0.0.0:${env.port}      ║
║  🌍 Public URL: ${env.frontend_url}                    ║
║  📦 Environment: ${env.node_env.toUpperCase()}         ║
║  🗄️  Database: PostgreSQL                              ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
  `);
});
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Graceful Shutdown
const gracefulShutdown = async (signal: string): Promise<void> => {
  console.info(`\n📛 ${signal} received, gracefully shutting down...`);

  if (server) {
    server.close(() => {
      console.info('✅ Server closed');
    });
  }

  // Give server a few seconds to close
  setTimeout(() => {
    console.info('⛔ Force terminating...');
    process.exit(0);
  }, 5000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', error => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

// Start the server
startServer();
