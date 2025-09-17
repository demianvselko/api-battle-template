import { setupServer } from '@infrastructure/config/server.config';
import { createMockApp } from '../__mocks__/nest-app.mock';

jest.mock('@infrastructure/config/swagger.config', () => ({
    setupSwagger: jest.fn(),
}));

describe('setupServer', () => {
    it('should configure server without errors', async () => {
        const mockApp = createMockApp();

        await expect(setupServer(mockApp)).resolves.not.toThrow();

        expect(mockApp.enableCors).toHaveBeenCalled();
        expect(mockApp.use).toHaveBeenCalled();
        expect(mockApp.useGlobalFilters).toHaveBeenCalled();
        expect(mockApp.useGlobalInterceptors).toHaveBeenCalled();
        expect(mockApp.listen).toHaveBeenCalled();
    });
});
