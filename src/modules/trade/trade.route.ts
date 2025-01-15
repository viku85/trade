import { Router } from "express";
import TradeController from "./trade.controller";

const router = Router();
const controller = new TradeController();

router.get("/", (req, res) => controller.getTrades(req, res));

export default router;
