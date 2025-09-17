import { INestApplication } from '@nestjs/common';

export function createMockApp(): INestApplication {
    return {
        get: jest.fn().mockImplementation((token) => {
            if (token && token.name === 'ConfigService') {
                return { get: jest.fn().mockReturnValue(undefined) };
            }
            return {};
        }),
        enableCors: jest.fn(),
        use: jest.fn(),
        useGlobalFilters: jest.fn(),
        useGlobalInterceptors: jest.fn(),
        listen: jest.fn().mockResolvedValue(true),
    } as unknown as INestApplication;
}
