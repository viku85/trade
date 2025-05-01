import { Prisma } from '@prisma/client';

export interface Purchase {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  asset: string;
}