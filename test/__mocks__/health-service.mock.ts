export const mockHealthService = {
  check: jest.fn(() => ({ status: 'ok', service: 'mock-service' })),
};
