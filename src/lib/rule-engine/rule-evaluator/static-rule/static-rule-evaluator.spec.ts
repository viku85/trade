import { StaticRuleEvaluator } from './static-rule-evaluator';

describe('StaticRuleEvaluator', () => {
  describe('evaluate', () => {
    it('should evaluate a static condition with greater than operator', async () => {
      const staticRuleEvaluator = new StaticRuleEvaluator(
        '1',
        'Price greater than 100',
        'context.price > 100'
      );
      const context = { price: 150 };

      const result = await staticRuleEvaluator.evaluate(context);
      expect(result).toBe(true);
    });

    it('should evaluate a static condition with less than operator', async () => {
      const staticRuleEvaluator = new StaticRuleEvaluator(
        '2',
        'Price less than 100',
        'context.price < 100'
      );
      const context = { price: 50 };

      const result = await staticRuleEvaluator.evaluate(context);
      expect(result).toBe(true);
    });

    it('should evaluate a static condition with equal operator', async () => {
      const staticRuleEvaluator = new StaticRuleEvaluator(
        '3',
        'Price equal to 100',
        'context.price == 100'
      );
      const context = { price: 100 };

      const result = await staticRuleEvaluator.evaluate(context);
      expect(result).toBe(true);
    });

    it('should evaluate to false when condition is not met', async () => {
      const staticRuleEvaluator = new StaticRuleEvaluator(
        '4',
        'Price greater than 100',
        'context.price > 100'
      );
      const context = { price: 50 };

      const result = await staticRuleEvaluator.evaluate(context);
      expect(result).toBe(false);
    });

    it('should handle different data types', async () => {
      const staticRuleEvaluator = new StaticRuleEvaluator(
        '5',
        'Symbol is AAPL',
        'context.symbol == "AAPL"'
      );
      const context = { symbol: 'AAPL' };

      const result = await staticRuleEvaluator.evaluate(context);
      expect(result).toBe(true);
    });

    it('should handle missing market data field', async () => {
      const staticRuleEvaluator = new StaticRuleEvaluator(
        '6',
        'Price greater than 100',
        'context.price > 100'
      );
      const context = {}; // Missing 'price'

      try {
        await staticRuleEvaluator.evaluate(context);
        // If it didn't throw, it failed
        fail('Expected an error to be thrown');
      } catch (error) {
        expect(error.message).toEqual('context is required.');
      }
    });
  });
});
