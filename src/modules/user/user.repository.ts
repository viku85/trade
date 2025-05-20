import {PrismaClient} from '@prisma/client';
import {singleton, injectable} from 'tsyringe';

@injectable()
export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUserRules(userId: string) {
    try {
      const rules = await this.prisma.rule.findMany({
        where: {
          userId: parseInt(userId, 10), // Assuming userId is an integer in the database
        },
      });
      return rules;
    } catch (error: any) {
      console.error(`Error fetching user rules for user ${userId}:`, error);
      // Depending on your error handling strategy, you might want to throw the error
      // or return an empty array or null. Returning empty array for now.
      return [];
    }
  }

  async getAllUsersWithRules() {
    try {
      const users = await this.prisma.user.findMany({
        include: {
          rules: true, // Include the rules related to each user
        },
      });
      return users;
    } catch (error) {
      console.error('Error fetching all users with rules:', error);
      // Handle error appropriately, e.g., throw it or return an empty array
      // Returning an empty array for now
      return [];
    }
  }

  // Add other user-related data access methods here
  // e.g., async getUserHoldings(userId: string): Promise<Holding[]> { ... }
  // e.g., async updateUserBalance(userId: string, newBalance: number): Promise<void> { ... }
}
