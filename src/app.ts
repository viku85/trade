import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import healthRoutes from "./modules/health/health.route";
import tradeRoutes from "./modules/trade/trade.route";

dotenv.config();

const app = express();
app.use(express.json());

// Load Module Routes
app.use("/api/health", healthRoutes);
app.use("/api/trade", tradeRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Serverless Trading API" });
});

// Error Handling Middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

export const handler = serverless(app);
