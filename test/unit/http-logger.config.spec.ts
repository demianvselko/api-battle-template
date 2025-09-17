import { setupHttpLogger } from '@infrastructure/config/http-logger.config';

describe('setupHttpLogger', () => {
  it('should return a middleware function', () => {
    const middleware = setupHttpLogger('test-service');
    expect(typeof middleware).toBe('function');
  });

  it('should define custom serializers', () => {
    const middleware = setupHttpLogger('test-service');
    expect(middleware.logger).toBeDefined();
    expect(middleware.logger.bindings().service).toBe('test-service');
  });
});
