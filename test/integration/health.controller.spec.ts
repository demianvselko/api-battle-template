import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '@interfaces/http/health.controller';
import { HealthService } from '@application/health/health.service';
import { mockHealthService } from '../__mocks__/health-service.mock';

describe('HealthController (Integration)', () => {
    let controller: HealthController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [HealthController],
            providers: [{ provide: HealthService, useValue: mockHealthService }],
        }).compile();

        controller = module.get<HealthController>(HealthController);
    });

    it('should return health status from service', () => {
        expect(controller.getHealth()).toEqual({
            status: 'ok',
            service: 'mock-service',
        });
    });
});
