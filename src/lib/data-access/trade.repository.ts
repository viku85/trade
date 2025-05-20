import {PrismaClient, Purchase, RulePurchase, Sale} from '../../../prisma/prisma/client';

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
  purchaseId?: number;
  purchase: any;
}

export class TradeRepository {
  private prisma: PrismaClient;
  constructor(prismaClient?: PrismaClient) {
    this.prisma = prismaClient || new PrismaClient();
  }
  async createPurchase({amount, asset, userId}: CreatePurchaseParams): Promise<Purchase> {
    return this.prisma.purchase.create({
      data: {
        amount,
        asset,
        userId,
      },
    });
  }

  async createSale({amount, asset, userId}: CreateSaleParams): Promise<Sale> {
    return this.prisma.sale.create({
      data: {
        amount,
        asset,
        userId,
      },
    });
  }

  async getPurchase(id: number): Promise<Purchase | null> {
    return await this.prisma.purchase.findUnique({where: {id}});
  }

  async getPurchasesByUserId(userId: number): Promise<Purchase[]> {
    return await this.prisma.purchase.findMany({where: {userId}});
  }
  async getSalesByUserId(userId: number): Promise<Sale[]> {
    return await this.prisma.sale.findMany({where: {userId}});
  }
  async createRulePurchase({
    userId,
    ruleId,
    purchase,
  }: CreateRulePurchaseParams): Promise<RulePurchase> {
    let createdPurchase: Purchase;
    try {
      createdPurchase = await this.createPurchase({
        amount: purchase.quantity,
        asset: purchase.symbol,
        userId,
      });
    } catch (error) {
      console.error('Error creating purchase:', error);
      throw error;
    }
    const purchaseId = createdPurchase.id;

    try {
      return await this.prisma.rulePurchase.create({
        data: {
          userId,
          ruleId,
          purchaseId: purchaseId,
        },
      });
    } catch (error) {
      console.error('Error creating rule purchase:', error);
      throw error;
    }
  }
}
