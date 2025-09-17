import { setupSwagger } from '@infrastructure/config/swagger.config';
import { INestApplication } from '@nestjs/common';

jest.mock('@nestjs/swagger', () => ({
    DocumentBuilder: jest.fn().mockImplementation(() => ({
        setTitle: jest.fn().mockReturnThis(),
        setDescription: jest.fn().mockReturnThis(),
        setVersion: jest.fn().mockReturnThis(),
        addBearerAuth: jest.fn().mockReturnThis(),
        build: jest.fn().mockReturnValue({}),
    })),
    SwaggerModule: {
        createDocument: jest.fn().mockReturnValue({}),
        setup: jest.fn(),
    },
}));

describe('setupSwagger', () => {
    it('should setup swagger without errors', () => {
        const mockApp = {
            getHttpAdapter: jest.fn().mockReturnValue({ getType: jest.fn() }),
        } as unknown as INestApplication;

        expect(() => setupSwagger(mockApp)).not.toThrow();
    });
});
