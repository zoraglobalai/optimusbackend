import { createApp } from '../src/app.js';
import { initializeDatabase } from '../src/config/data-source.js';

const app = createApp();

let databaseReady: Promise<void> | null = null;

const ensureDatabase = async (): Promise<void> => {
  if (!databaseReady) {
    databaseReady = initializeDatabase().catch(error => {
      databaseReady = null;
      throw error;
    });
  }

  await databaseReady;
};

export default async function handler(req: any, res: any): Promise<void> {
  try {
    await ensureDatabase();
    app(req, res);
  } catch (error) {
    console.error('Failed to initialize database:', error);
    res.status(503).json({
      success: false,
      message: 'Service temporarily unavailable',
      error: 'Database connection failed',
      timestamp: new Date().toISOString(),
    });
  }
}
