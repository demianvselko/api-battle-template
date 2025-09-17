export class HealthService {
  check() {
    return {
      status: 'ok',
      service: 'template-service',
    };
  }
}
