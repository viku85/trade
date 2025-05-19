import request from 'supertest';
import express from 'express';
import { HealthRoute } from '../health/health.route'; // Adjust the import path as needed
import { HealthController } from '../health/health.controller'; // Adjust the import path as needed

// Mock the HealthController
jest.mock('../health/health.controller');

describe('HealthRoute', () => {
  let app: express.Application;

  beforeAll(() => {
    // Create an express app to test the route
    app = express();
    app.use('/health', HealthRoute); // Use the HealthRoute
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /health', () => {
    it('should call HealthController.checkHealth and return 200', async () => {
      // Arrange
      const mockCheckHealth = jest.fn((req, res) => {
        res.status(200).json({ status: 'ok' });
      });
      (HealthController.checkHealth as jest.Mock).mockImplementation(mockCheckHealth);

      // Act
      const response = await request(app).get('/health');

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: 'ok' });
      expect(HealthController.checkHealth).toHaveBeenCalledTimes(1);
    });
  });
});