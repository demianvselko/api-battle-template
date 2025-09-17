import { ResponseInterceptor } from '@infrastructure/interceptors/response.interceptor';
import { testInterceptor } from '../utils/interceptor-tester';
import { ResponseFormat } from '@domain/types/Response-Format';

describe('ResponseInterceptor', () => {
  it('should wrap response with success, data and timestamp', async () => {
    const interceptor = new ResponseInterceptor<{ test: boolean }>();

    const result = await testInterceptor<
      { test: boolean },
      ResponseFormat<{ test: boolean }>
    >(interceptor, { test: true });

    expect(result.success).toBe(true);
    expect(result.data).toEqual({ test: true });
    expect(result.timestamp).toBeDefined();
  });
});
