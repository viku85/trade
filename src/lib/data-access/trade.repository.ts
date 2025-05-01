import { PrismaClient, Purchase, Sale, RulePurchase } from '@prisma/client';

const prisma = new PrismaClient();
interface CreatePurchaseParams {
  amount: number;
  asset: string;
  userId: number;
}
interface CreateSaleParams {
  amount: number;
  asset: string;
  userId: number;
}

interface CreateRulePurchaseParams {
  userId: number;
  ruleId: number;
  purchaseId?:number;
  purchase: any;
}

export class TradeRepository {
  async createPurchase({ amount, asset, userId }: CreatePurchaseParams): Promise<Purchase> {
    return prisma.purchase.create({
      data: {
        amount,
        asset,
        userId,
      },
    });
  }

  async createSale({ amount, asset, userId }: CreateSaleParams): Promise<Sale> {
    return prisma.sale.create({
      data: {
        amount,
        asset,
        userId,
      },
    });
  }

  async getPurchase(id: number): Promise<Purchase | null> {
    return await prisma.purchase.findUnique({ where: { id } });
  }

  async getPurchasesByUserId(userId: number): Promise<Purchase[]> {
    return await prisma.purchase.findMany({ where: { userId } });
  }
  async getSalesByUserId(userId: number): Promise<Sale[]> {
    return await prisma.sale.findMany({ where: { userId } });
  }
  async createRulePurchase({ userId, ruleId, purchase}: CreateRulePurchaseParams): Promise<RulePurchase> {
    let purchaseId = null;
    if(purchase.orderId){
      const createdPurchase = await this.createPurchase({amount: purchase.quantity, asset: purchase.symbol, userId});
      purchaseId = createdPurchase.id
    }
    return prisma.rulePurchase.create({
      data: {
        userId,
        ruleId,
        purchaseId: purchaseId,
        condition: JSON.stringify(purchase)
      },
    });
  }


}