import { HealthController } from './health.controller';
import { HealthService } from './health.service';

describe('HealthController', () => {
  let healthController: HealthController;
  let healthService: HealthService;

  beforeEach(() => {
    healthService = { checkHealth: jest.fn() } as any;
    healthController = new HealthController(healthService);
  });

  it('should be defined', () => {
    expect(healthController).toBeDefined();
  });

  describe('checkHealth', () => {
    it('should call healthService.checkHealth and return its result with status 200', async () => {
      const mockHealthStatus = { status: 'UP', dependencies: {} };
      (healthService.checkHealth as jest.Mock).mockResolvedValue(mockHealthStatus);

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockRequest = {}; // Mock request object if needed

      await healthController.checkHealth(mockRequest as any, mockResponse as any);

      expect(healthService.checkHealth).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockHealthStatus);
    });

    it('should return status 500 if healthService.checkHealth throws an error', async () => {
      const mockError = new Error('Database connection failed');
      (healthService.checkHealth as jest.Mock).mockRejectedValue(mockError);

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockRequest = {};

      await healthController.checkHealth(mockRequest as any, mockResponse as any);

      expect(healthService.checkHealth).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Internal Server Error' }); // Or a more specific error structure if the controller handles it
    });
  });
});