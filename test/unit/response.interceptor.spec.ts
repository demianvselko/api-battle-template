import { ResponseInterceptor } from '@infrastructure/interceptors/response.interceptor';
import { of } from 'rxjs';

describe('ResponseInterceptor', () => {
    it('should wrap response with success, data and timestamp', (done) => {
        const interceptor = new ResponseInterceptor();
        const next = { handle: () => of({ test: true }) };
        interceptor.intercept({} as any, next as any).subscribe((res) => {
            expect(res.success).toBe(true);
            expect(res.data).toEqual({ test: true });
            expect(res.timestamp).toBeDefined();
            done();
        });
    });
});
