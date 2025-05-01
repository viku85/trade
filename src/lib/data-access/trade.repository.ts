import { PrismaClient, Purchase, Sale } from '@prisma/client';

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
}