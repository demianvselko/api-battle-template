import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { of, firstValueFrom, isObservable } from 'rxjs';

export async function testInterceptor<T, R>(
  interceptor: NestInterceptor<T, R>,
  data: T,
  context: ExecutionContext = {} as ExecutionContext,
): Promise<R> {
  const next: CallHandler = { handle: () => of(data) };

  const result = interceptor.intercept(context, next);

  if (isObservable(result)) {
    return await firstValueFrom(result);
  }

  const obs = await result;
  return await firstValueFrom(obs);
}
