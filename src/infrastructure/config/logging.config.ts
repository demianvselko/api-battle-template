import pino from 'pino';

export function setupLogger(serviceName?: string) {
  const isPretty = process.env.LOG_PRETTY === 'true';

  return pino({
    level: process.env.LOG_LEVEL || 'info',
    transport: isPretty
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
          },
        }
      : undefined,
    base: {
      service: serviceName || process.env.SERVICE_NAME || 'api-battle-template',
      env: process.env.NODE_ENV || 'development',
    },
  });
}
