import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import healthRoutes from "./modules/health/health.route";
import tradeRoutes from "./modules/trade/trade.route";
import { initializeRealTimeTrading } from "./real-time-trade.initializer"; // Import the initializer

dotenv.config();

// Create an async function to bootstrap the application
async function bootstrap() {
  // Initialize real-time trading components
  await initializeRealTimeTrading();

  const app = express();
  app.use(express.json());

  // Load Module Routes
  app.use("/api/health", healthRoutes);
  app.use("/api/trade", tradeRoutes);

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Serverless Trading API" });
  });

  return app;
}


// Error Handling Middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Export the handler that calls the bootstrap function
export const handler = async (event: any, context: any) => {
  const app = await bootstrap();
  return serverless(app)(event, context);
};
