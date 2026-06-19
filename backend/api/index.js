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
