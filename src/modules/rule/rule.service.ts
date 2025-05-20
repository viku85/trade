import {Rule} from '../../lib/rule-engine/types/Rule';
import {singleton, injectable} from 'tsyringe';
import {PrismaClient} from '@prisma/client';

type JsonValue = any; // fallback for Prisma Json type

interface PrismaRule {
  id: number;
  userId: number;
  description: string;
  type: string;
  condition: JsonValue;
  conditionOperator: string;
}

function mapPrismaRuleToRule(prismaRule: PrismaRule): Rule {
  return {
    id: String(prismaRule.id),
    userId: String(prismaRule.userId),
    description: prismaRule.description,
    type: prismaRule.type,
    conditions: prismaRule.condition as Rule['conditions'],
    conditionOperator: prismaRule.conditionOperator as 'AND' | 'OR',
  };
}

@injectable()
export class RuleService {
  private prisma = new PrismaClient();

  async createRule(dto: Omit<Rule, 'id'>): Promise<Rule> {
    const rule = await this.prisma.rule.create({
      data: {
        userId: parseInt(dto.userId, 10),
        description: dto.description,
        type: dto.type,
        condition: dto.conditions,
        conditionOperator: dto.conditionOperator,
      },
    });
    return mapPrismaRuleToRule(rule as PrismaRule);
  }

  async updateRule(id: string, dto: Partial<Omit<Rule, 'id'>>): Promise<Rule> {
    const rule = await this.prisma.rule.update({
      where: {id: parseInt(id, 10)},
      data: {
        description: dto.description,
        type: dto.type,
        condition: dto.conditions,
        conditionOperator: dto.conditionOperator,
      },
    });
    return mapPrismaRuleToRule(rule as PrismaRule);
  }

  async deleteRule(id: string): Promise<{id: string; userId: string}> {
    const rule = await this.prisma.rule.delete({
      where: {id: parseInt(id, 10)},
    });
    return {id: String((rule as PrismaRule).id), userId: String((rule as PrismaRule).userId)};
  }

  async getRuleById(id: string): Promise<Rule | null> {
    const rule = await this.prisma.rule.findUnique({
      where: {id: parseInt(id, 10)},
    });
    return rule ? mapPrismaRuleToRule(rule as PrismaRule) : null;
  }

  async getAllRules(): Promise<Rule[]> {
    const rules = await this.prisma.rule.findMany();
    return rules.map((r: PrismaRule) => mapPrismaRuleToRule(r));
  }

  async getRulesByUser(userId: string): Promise<Rule[]> {
    const rules = await this.prisma.rule.findMany({
      where: {userId: parseInt(userId, 10)},
    });
    return rules.map((r: PrismaRule) => mapPrismaRuleToRule(r));
  }
}
