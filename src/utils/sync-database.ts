import { AppDataSource } from '../config/data-source.js';

const syncDatabase = async (): Promise<void> => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    console.info('Running database synchronization...');
    await AppDataSource.synchronize(true);
    console.info('✅ Database synchronized successfully');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error synchronizing database:', error);
    process.exit(1);
  }
};

syncDatabase();
