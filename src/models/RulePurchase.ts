import {Prisma} from '../../prisma/prisma/client';

export const RulePurchaseModel = Prisma.validator<Prisma.RulePurchaseDefaultArgs>()({
  select: {
    id: true,
    userId: true,
    ruleId: true,
    purchaseId: true,
  },
});

export type RulePurchase = Prisma.RulePurchaseGetPayload<typeof RulePurchaseModel>;
