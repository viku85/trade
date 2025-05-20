import 'reflect-metadata';
import express from 'express';
import serverless from 'serverless-http';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import {registerRoutes} from './utils/routes.util';
import {initializeRealTimeTrading} from './real-time-trade.initializer';
import {validateEnv} from './utils/env.util';
import {errorHandler} from './utils/error-handler.util';
import {container} from 'tsyringe';

dotenv.config();

// Register dependencies
container.register('InitializeRealTimeTrading', {useValue: initializeRealTimeTrading});

// Create an async function to bootstrap the application
async function bootstrap() {
  // Validate environment variables
  validateEnv();

  // Initialize real-time trading components using DI
  const initialize = container.resolve(
    'InitializeRealTimeTrading'
  ) as typeof initializeRealTimeTrading;
  await initialize();

  const app = express();
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());

  // Register all routes
  registerRoutes(app);

  // Enhanced error handler
  app.use(errorHandler);

  return app;
}

// Export the handler that calls the bootstrap function
export const handler = async (event: any, context: any) => {
  const app = await bootstrap();
  return serverless(app)(event, context);
};
