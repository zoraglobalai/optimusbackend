import { spawn } from 'node:child_process';

const parseNumber = (value, fallback) => {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
};

const sleep = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const runNpm = args =>
  new Promise(resolve => {
    const child =
      process.platform === 'win32'
        ? spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', `npm ${args.join(' ')}`], {
            stdio: 'inherit',
          })
        : spawn('npm', args, { stdio: 'inherit' });

    child.on('close', code => {
      resolve(code ?? 1);
    });

    child.on('error', () => {
      resolve(1);
    });
  });

const runMigrationsWithRetry = async () => {
  const retries = Math.max(parseNumber(process.env.DB_MIGRATION_RETRIES, 3), 1);
  const retryDelayMs = Math.max(parseNumber(process.env.DB_MIGRATION_RETRY_DELAY_MS, 5000), 1000);

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    const exitCode = await runNpm(['run', 'db:migrate']);
    if (exitCode === 0) {
      console.info(`Migrations completed on attempt ${attempt}/${retries}`);
      return true;
    }

    const isLastAttempt = attempt === retries;
    console.error(`Migration attempt ${attempt}/${retries} failed.`);

    if (!isLastAttempt) {
      console.info(`Retrying migrations in ${retryDelayMs}ms...`);
      await sleep(retryDelayMs);
    }
  }

  return false;
};

const requireMigrationsOnStartup =
  String(process.env.REQUIRE_MIGRATIONS_ON_STARTUP ?? 'false').toLowerCase() === 'true';

const migrationsSucceeded = await runMigrationsWithRetry();
if (!migrationsSucceeded) {
  if (requireMigrationsOnStartup) {
    console.error('Migrations failed and REQUIRE_MIGRATIONS_ON_STARTUP=true. Exiting.');
    process.exit(1);
  }

  console.warn('Migrations failed. Continuing startup because REQUIRE_MIGRATIONS_ON_STARTUP=false.');
}

const startExitCode = await runNpm(['run', 'start']);
process.exit(startExitCode);
