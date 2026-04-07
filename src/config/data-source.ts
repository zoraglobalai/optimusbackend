import { DataSource } from 'typeorm';
import { env } from './env.js';

import { User } from '../entities/User.entity.js';
import { Course } from '../entities/Course.entity.js';
import { Scholarship } from '../entities/Scholarship.entity.js';
import { AcademicRequirement } from '../entities/AcademicRequirement.entity.js';
import { ApplicationFiling } from '../entities/ApplicationFiling.entity.js';


type DatabaseConnectionState = 'disconnected' | 'connecting' | 'connected';

type DatabaseRuntimeStatus = {
  state: DatabaseConnectionState;
  attempts: number;
  lastAttemptAt: string | null;
  lastConnectedAt: string | null;
  lastError: string | null;
};

const isProd = env.isProduction;
const hasDatabaseUrl = Boolean(env.database_url);
const shouldUseSslForUrl = hasDatabaseUrl && !/[?&]sslmode=disable/i.test(env.database_url);
const useSsl = isProd || shouldUseSslForUrl;

const dbRuntimeStatus: DatabaseRuntimeStatus = {
  state: 'disconnected',
  attempts: 0,
  lastAttemptAt: null,
  lastConnectedAt: null,
  lastError: null,
};

const toErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    const message = error.message?.trim();
    if (message) {
      return message;
    }

    const code = (error as Error & { code?: string }).code;
    if (code) {
      return `Database connection error (${code})`;
    }

    return error.name || 'Unknown database error';
  }

  if (typeof error === 'string') {
    return error.trim() || 'Unknown database error';
  }

  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
};

export const AppDataSource = new DataSource({
  type: 'postgres',
  ...(env.database_url
    ? { url: env.database_url }
    : {
        host: env.db.host,
        port: env.db.port,
        username: env.db.username,
        password: env.db.password,
        database: env.db.database,
      }),
  synchronize: env.isDevelopment,
  logging: env.isDevelopment ? ['error', 'warn'] : ['error'],
  entities: [User, Course, Scholarship, AcademicRequirement, ApplicationFiling],
  subscribers: [],
  migrations: [isProd ? 'dist/migrations/**/*.js' : 'src/migrations/**/*.ts'],
  migrationsRun: false,
  ssl: useSsl
    ? {
        rejectUnauthorized: false,
      }
    : false,
  extra: useSsl
    ? {
        max: 10,
        connectionTimeoutMillis: 10_000,
      }
    : undefined,
});

export const getDatabaseStatus = (): DatabaseRuntimeStatus & { initialized: boolean } => ({
  ...dbRuntimeStatus,
  initialized: AppDataSource.isInitialized,
});

export const initializeDatabase = async (): Promise<void> => {
  if (AppDataSource.isInitialized) {
    dbRuntimeStatus.state = 'connected';
    dbRuntimeStatus.lastError = null;
    if (!dbRuntimeStatus.lastConnectedAt) {
      dbRuntimeStatus.lastConnectedAt = new Date().toISOString();
    }
    return;
  }

  dbRuntimeStatus.state = 'connecting';
  dbRuntimeStatus.attempts += 1;
  dbRuntimeStatus.lastAttemptAt = new Date().toISOString();

  try {
    await AppDataSource.initialize();
    dbRuntimeStatus.state = 'connected';
    dbRuntimeStatus.lastConnectedAt = new Date().toISOString();
    dbRuntimeStatus.lastError = null;
    console.info('Database connection established');
  } catch (error) {
    dbRuntimeStatus.state = 'disconnected';
    dbRuntimeStatus.lastError = toErrorMessage(error) || 'Unknown database error';
    console.error('Database connection failed:', error);
    throw error;
  }
};
