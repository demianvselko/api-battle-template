import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { HealthService } from '@application/health/health.service';
import { setupLogger } from '@infrastructure/config/logging.config';
import { HealthErrorMessages } from '@domain/errors/health-error-messages.enum';
import { GlobalErrorMessages } from '@domain/errors/global-error-messages.enum';

@Controller('health')
export class HealthController {
  private readonly logger = setupLogger('health');

  constructor(private readonly healthService: HealthService) { }

  @Get()
  getHealth() {
    try {
      return this.healthService.check();
    } catch (error) {
      this.logger.error(
        { err: error },
        HealthErrorMessages.HEALTH_CHECK_FAILED || GlobalErrorMessages.UNEXPECTED_ERROR,
      );

      throw new InternalServerErrorException(
        HealthErrorMessages.HEALTH_CHECK_FAILED,
      );
    }
  }
}
