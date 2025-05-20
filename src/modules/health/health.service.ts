class HealthService {
  private databaseService: any;
  private externalApiService: any;

  constructor(databaseService?: any, externalApiService?: any) {
    this.databaseService = databaseService || {checkConnection: async () => ({status: 'up'})};
    this.externalApiService = externalApiService || {checkStatus: async () => ({status: 'up'})};
  }

  async checkHealth() {
    let dbStatus, apiStatus;
    try {
      dbStatus = await this.databaseService.checkConnection();
    } catch (error) {
      dbStatus = {
        status: 'down',
        error: error instanceof Error ? error : new Error('Unknown error'),
      };
    }
    try {
      apiStatus = await this.externalApiService.checkStatus();
    } catch (error) {
      apiStatus = {
        status: 'down',
        error: error instanceof Error ? error : new Error('Unknown error'),
      };
    }
    const overallStatus =
      dbStatus.status === 'up' && apiStatus.status === 'up' ? 'healthy' : 'unhealthy';
    return {
      overallStatus,
      dependencies: {
        database: dbStatus,
        externalApi: apiStatus,
      },
    };
  }
}

export {HealthService};
