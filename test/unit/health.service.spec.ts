import { HealthService } from '@application/health/health.service';

describe('HealthService (Unit)', () => {
  let healthService: HealthService;

  beforeEach(() => {
    healthService = new HealthService();
  });

  it('should return ok status', () => {
    const result = healthService.check();
    expect(result).toEqual({
      status: 'ok',
      service: 'template-service',
    });
  });
});
