import {Prisma} from '../../prisma/prisma/client';

export const SaleModel = Prisma.validator<Prisma.SaleDefaultArgs>()({
  select: {
    id: true,
    createdAt: true,
    updatedAt: true,
    amount: true,
    asset: true,
    userId: true, // Add userId here
  },
});

export type Sale = Prisma.SaleGetPayload<typeof SaleModel>;
