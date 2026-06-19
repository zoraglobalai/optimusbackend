let appReady = null;

const getApp = async () => {
  if (!appReady) {
    appReady = import('../dist/app.js')
      .then(({ createApp }) => createApp())
      .catch(error => {
        appReady = null;
        throw error;
      });
  }

  return appReady;
};

export default async function handler(req, res) {
  if (req.url === '/health/env') {
    res.status(200).json({
      status: 'ok',
      environment: {
        NODE_ENV: process.env.NODE_ENV || null,
        DATABASE_URL: Boolean(process.env.DATABASE_URL),
        JWT_SECRET: Boolean(process.env.JWT_SECRET),
        REFRESH_TOKEN_SECRET: Boolean(process.env.REFRESH_TOKEN_SECRET),
        FRONTEND_URL: Boolean(process.env.FRONTEND_URL),
      },
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (req.url === '/' || req.url?.startsWith('/health')) {
    res.status(200).json({
      status: 'ok',
      message: 'Serverless function is running',
      timestamp: new Date().toISOString(),
    });
    return;
  }

  try {
    const app = await getApp();
    app(req, res);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown startup error';

    console.error('Failed to initialize serverless function:', error);
    res.status(500).json({
      success: false,
      message: 'Serverless function failed to start',
      error: message,
      timestamp: new Date().toISOString(),
    });
  }
}
