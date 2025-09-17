import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './swagger.config';
import { setupLogger } from './logging.config';
import { setupHttpLogger } from './http-logger.config';
import { AllExceptionsFilter } from '@infrastructure/filters/all-exceptions.filter';
import { ResponseInterceptor } from '@infrastructure/interceptors/response.interceptor';

export async function setupServer(app: INestApplication) {
    const configService = app.get(ConfigService);
    const logger = setupLogger(configService.get<string>('SERVICE_NAME'));

    app.enableCors({ origin: true, credentials: true });
    app.use(setupHttpLogger(configService.get<string>('SERVICE_NAME')));
    setupSwagger(app);

    app.useGlobalFilters(new AllExceptionsFilter());
    app.useGlobalInterceptors(new ResponseInterceptor());

    const host = configService.get<string>('HOST') || '0.0.0.0';
    const port = configService.get<number>('PORT') || 3000;
    const env = configService.get<string>('NODE_ENV') || 'development';
    const serviceName =
        configService.get<string>('SERVICE_NAME') || 'api-battle-service';

    await app.listen(port, host);
    logger.info(
        `🚀 ${serviceName} running in ${env} mode on http://${host}:${port}`,
    );
}
