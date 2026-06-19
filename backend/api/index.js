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

const getRequestPath = req => {
  const rawUrl =
    req.headers?.['x-original-url'] ||
    req.headers?.['x-rewrite-url'] ||
    req.url ||
    '/';

  return new URL(rawUrl, 'https://localhost').pathname;
};

const sendJson = (res, statusCode, body) => {
  res.statusCode = statusCode;
  res.setHeader?.('content-type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
};

export default async function handler(req, res) {
  const path = getRequestPath(req);

  if (path === '/health/env') {
    sendJson(res, 200, {
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

  if (path === '/' || path === '/api/index' || path.startsWith('/health')) {
    sendJson(res, 200, {
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
    sendJson(res, 500, {
      success: false,
      message: 'Serverless function failed to start',
      error: message,
      timestamp: new Date().toISOString(),
    });
  }
}
