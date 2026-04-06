import 'dotenv/config';
import type { SignOptions } from 'jsonwebtoken';

const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  if (!value) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const parseNumberEnv = (key: string, defaultValue: number): number => {
  const rawValue = process.env[key];
  if (!rawValue) {
    return defaultValue;
  }

  const parsedValue = Number.parseInt(rawValue, 10);
  return Number.isNaN(parsedValue) ? defaultValue : parsedValue;
};

const nodeEnv = getEnv('NODE_ENV', 'development');
const isProduction = nodeEnv === 'production';

export const env = {
  // Server
  node_env: nodeEnv,
  port: parseInt(getEnv('PORT', '3001'), 10),
  frontend_url: getEnv('FRONTEND_URL', 'http://localhost:8080'),

  // Database
  database_url: process.env.DATABASE_URL || '',

  db: {
    host: getEnv('DB_HOST', 'localhost'),
    port: parseInt(getEnv('DB_PORT', '5432'), 10),
    username: getEnv('DB_USERNAME', 'postgres'),
    password: process.env.DB_PASSWORD || '',
    database: getEnv('DB_DATABASE', 'optimus'),
  },

  db_startup: {
    require_on_startup: getEnv('REQUIRE_DB_ON_STARTUP', 'false').toLowerCase() === 'true',
    retries: parseNumberEnv('DB_STARTUP_RETRIES', 12),
    retry_delay_ms: parseNumberEnv('DB_RETRY_DELAY_MS', 5000),
  },

  // JWT
  jwt: {
    secret: getEnv('JWT_SECRET'),
    expiry: getEnv('JWT_EXPIRY', '15m') as SignOptions['expiresIn'],
  },

  // Refresh Token
  refresh_token: {
    secret: getEnv('REFRESH_TOKEN_SECRET'),
    expiry: getEnv('REFRESH_TOKEN_EXPIRY', '7d') as SignOptions['expiresIn'],
  },

  // Logging
  log_level: getEnv('LOG_LEVEL', isProduction ? 'info' : 'debug'),

  // Utils
  isDevelopment: nodeEnv === 'development',
  isProduction,
} as const;

export default env;
