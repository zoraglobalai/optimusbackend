import { DataSource } from 'typeorm';
import  {env}  from './env.js';

import { User } from '../entities/User.entity.js';
import { Course } from '../entities/Course.entity.js';
import { Scholarship } from '../entities/Scholarship.entity.js';
import { AcademicRequirement } from '../entities/AcademicRequirement.entity.js';
import { ApplicationFiling } from '../entities/ApplicationFiling.entity.js';

const isProd = env.isProduction;
const hasDatabaseUrl = Boolean(env.database_url);
const shouldUseSslForUrl =
  hasDatabaseUrl && !/[?&]sslmode=disable/i.test(env.database_url);
const useSsl = isProd || shouldUseSslForUrl;

export const AppDataSource = new DataSource({
  type: 'postgres',

  // ✅ Prefer DATABASE_URL (Neon / production)
  ...(env.database_url
    ? { url: env.database_url }
    : {
        host: env.db.host,
        port: env.db.port,
        username: env.db.username,
        password: env.db.password,
        database: env.db.database,
      }),

  // ✅ Never synchronize in production
  synchronize: env.isDevelopment,
  logging: env.isDevelopment ? ['error', 'warn'] : ['error'],

  entities: [User, Course, Scholarship, AcademicRequirement, ApplicationFiling],
  subscribers: [],

  // ✅ migrations path must match runtime
  migrations: [isProd ? 'dist/migrations/**/*.js' : 'src/migrations/**/*.ts'],
  migrationsRun: false,

  // ✅ Neon / managed Postgres typically needs SSL
  ssl: useSsl
    ? {
        rejectUnauthorized: false,
      }
    : false,

  // Optional: stable under load / serverless-ish envs
  extra: useSsl
    ? {
        max: 10,
        connectionTimeoutMillis: 10_000,
      }
    : undefined,
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.info('✅ Database connection established');
    }
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
};
