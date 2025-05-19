import {Prisma} from '../../prisma/prisma/client';

export const PurchaseModel = Prisma.validator<Prisma.PurchaseDefaultArgs>()({
  select: {
    id: true,
    createdAt: true,
    updatedAt: true,
    amount: true,
    asset: true,
    userId: true,
  },
});

export type Purchase = Prisma.PurchaseGetPayload<typeof PurchaseModel>;
