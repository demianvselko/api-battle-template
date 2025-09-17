import pino from 'pino';
import pinoHttp from 'pino-http';

export function setupHttpLogger(serviceName?: string) {
  const isPretty = process.env.LOG_PRETTY === 'true';

  const logger = pino({
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

  return pinoHttp({
    logger,
    customLogLevel: (req, res, err) => {
      if (res.statusCode >= 500 || err) return 'error';
      if (res.statusCode >= 400) return 'warn';
      return 'info';
    },
    serializers: {
      req(req) {
        return { method: req.method, url: req.url };
      },
      res(res) {
        return { statusCode: res.statusCode };
      },
    },
  });
}
