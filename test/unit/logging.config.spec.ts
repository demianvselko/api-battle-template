import { setupLogger } from '@infrastructure/config/logging.config';

describe('setupLogger', () => {
  it('should create a logger with default values', () => {
    const logger = setupLogger();
    expect(logger).toBeDefined();
    expect(typeof logger.info).toBe('function');
  });

  it('should use provided service name', () => {
    const logger = setupLogger('test-service');
    logger.info('msg');
    expect(logger.bindings()).toMatchObject({ service: 'test-service' });
  });
});
