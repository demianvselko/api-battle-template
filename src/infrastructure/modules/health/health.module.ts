import { Module } from '@nestjs/common';
import { HealthController } from '@interfaces/http/health.controller';
import { HealthService } from '@application/health/health.service';

@Module({
    controllers: [HealthController],
    providers: [
        {
            provide: HealthService,
            useClass: HealthService,
        },
    ],
    exports: [HealthService],
})
export class HealthModule { }
