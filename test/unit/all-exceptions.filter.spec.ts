import { AllExceptionsFilter } from '@infrastructure/filters/all-exceptions.filter';
import { ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

describe('AllExceptionsFilter', () => {
    let filter: AllExceptionsFilter;
    let mockResponse: any;

    beforeEach(() => {
        filter = new AllExceptionsFilter();
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };
    });

    const mockHost = (exception: unknown): ArgumentsHost =>
    ({
        switchToHttp: () => ({
            getResponse: () => mockResponse,
        }),
    } as unknown as ArgumentsHost);

    it('should handle HttpException', () => {
        const exception = new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        filter.catch(exception, mockHost(exception));
        expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.FORBIDDEN);
        expect(mockResponse.send).toHaveBeenCalledWith(
            expect.objectContaining({ success: false }),
        );
    });

    it('should handle generic error', () => {
        const exception = new Error('Unexpected');
        filter.catch(exception, mockHost(exception));
        expect(mockResponse.status).toHaveBeenCalledWith(
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    });
});
