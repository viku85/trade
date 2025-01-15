import { Request, Response } from "express";
import TradeService from "./trade.service";

class TradeController {
  private readonly service = new TradeService();

  public async getTrades(req: Request, res: Response): Promise<void> {
    try {
      const trades = this.service.getTrades();
      res.status(200).json(trades);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default TradeController;
