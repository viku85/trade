import { Prisma } from '@prisma/client';

export const SaleModel = Prisma.validator<Prisma.SaleDefaultArgs>()({
  select: {
    id: true,
    createdAt: true,
    updatedAt: true,
    amount: true,
    asset: true,
  },
});

export type Sale = Prisma.SaleGetPayload<typeof SaleModel>;