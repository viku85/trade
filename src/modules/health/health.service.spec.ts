import { HealthService } from './health.service';

describe('HealthService', () => {
  let healthService: HealthService;

  // Mock any dependencies the HealthService might check
  const mockDatabaseService = {
    checkConnection: jest.fn(),
  };

  const mockExternalApiService = {
    checkStatus: jest.fn(),
  };

  beforeEach(() => {
    // Create a new instance of HealthService before each test
    // Pass in the mocked dependencies
    healthService = new HealthService(
      mockDatabaseService as any,
      mockExternalApiService as any
    );
  });

  afterEach(() => {
    // Reset all mocks after each test
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(healthService).toBeDefined();
  });

  it('should return overall health status as healthy when all dependencies are healthy', async () => {
    // Configure mocks to indicate healthy dependencies
    mockDatabaseService.checkConnection.mockResolvedValue({ status: 'up' });
    mockExternalApiService.checkStatus.mockResolvedValue({ status: 'up' });

    const healthStatus = await healthService.checkHealth();

    // Assert the overall status and individual dependency statuses
    expect(healthStatus.overallStatus).toBe('healthy');
    expect(healthStatus.dependencies.database.status).toBe('up');
    expect(healthStatus.dependencies.externalApi.status).toBe('up');
  });

  it('should return overall health status as unhealthy when database is unhealthy', async () => {
    // Configure mocks to indicate an unhealthy database
    mockDatabaseService.checkConnection.mockResolvedValue({ status: 'down', error: 'Connection failed' });
    mockExternalApiService.checkStatus.mockResolvedValue({ status: 'up' });

    const healthStatus = await healthService.checkHealth();

    // Assert the overall status and individual dependency statuses
    expect(healthStatus.overallStatus).toBe('unhealthy');
    expect(healthStatus.dependencies.database.status).toBe('down');
    expect(healthStatus.dependencies.database.error).toBe('Connection failed');
    expect(healthStatus.dependencies.externalApi.status).toBe('up');
  });

  it('should return overall health status as unhealthy when external API is unhealthy', async () => {
    // Configure mocks to indicate an unhealthy external API
    mockDatabaseService.checkConnection.mockResolvedValue({ status: 'up' });
    mockExternalApiService.checkStatus.mockResolvedValue({ status: 'down', error: 'API not responding' });

    const healthStatus = await healthService.checkHealth();

    // Assert the overall status and individual dependency statuses
    expect(healthStatus.overallStatus).toBe('unhealthy');
    expect(healthStatus.dependencies.database.status).toBe('up');
    expect(healthStatus.dependencies.externalApi.status).toBe('down');
    expect(healthStatus.dependencies.externalApi.error).toBe('API not responding');
  });

  it('should return overall health status as unhealthy when both dependencies are unhealthy', async () => {
    // Configure mocks to indicate unhealthy dependencies
    mockDatabaseService.checkConnection.mockResolvedValue({ status: 'down', error: 'Connection failed' });
    mockExternalApiService.checkStatus.mockResolvedValue({ status: 'down', error: 'API not responding' });

    const healthStatus = await healthService.checkHealth();

    // Assert the overall status and individual dependency statuses
    expect(healthStatus.overallStatus).toBe('unhealthy');
    expect(healthStatus.dependencies.database.status).toBe('down');
    expect(healthStatus.dependencies.database.error).toBe('Connection failed');
    expect(healthStatus.dependencies.externalApi.status).toBe('down');
    expect(healthStatus.dependencies.externalApi.error).toBe('API not responding');
  });

  it('should handle errors during database health check', async () => {
    // Configure database mock to throw an error
    mockDatabaseService.checkConnection.mockRejectedValue(new Error('Database connection error'));
    mockExternalApiService.checkStatus.mockResolvedValue({ status: 'up' });

    const healthStatus = await healthService.checkHealth();

    // Assert overall status is unhealthy and database status reflects the error
    expect(healthStatus.overallStatus).toBe('unhealthy');
    expect(healthStatus.dependencies.database.status).toBe('down');
    expect(healthStatus.dependencies.database.error).toBeInstanceOf(Error);
    expect(healthStatus.dependencies.externalApi.status).toBe('up');
  });

  it('should handle errors during external API health check', async () => {
    // Configure external API mock to throw an error
    mockDatabaseService.checkConnection.mockResolvedValue({ status: 'up' });
    mockExternalApiService.checkStatus.mockRejectedValue(new Error('External API check error'));

    const healthStatus = await healthService.checkHealth();

    // Assert overall status is unhealthy and external API status reflects the error
    expect(healthStatus.overallStatus).toBe('unhealthy');
    expect(healthStatus.dependencies.database.status).toBe('up');
    expect(healthStatus.dependencies.externalApi.status).toBe('down');
    expect(healthStatus.dependencies.externalApi.error).toBeInstanceOf(Error);
  });
});