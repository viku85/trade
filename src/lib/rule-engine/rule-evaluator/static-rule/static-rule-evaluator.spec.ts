import {StaticRuleEvaluator} from './static-rule-evaluator';

describe('StaticRuleEvaluator', () => {
  it('should evaluate a static condition successfully', async () => {
    const staticRuleEvaluator = new StaticRuleEvaluator(
      '1',
      'Price greater than 100',
      'context.price > 100'
    );
    const context = {price: 150};

    const result = await staticRuleEvaluator.evaluate(context);
    expect(result).toBe(true);
  });

  it('should fail a static condition when it evaluates to false', async () => {
    const staticRuleEvaluator = new StaticRuleEvaluator(
      '2',
      'Price less than 100',
      'context.price < 100'
    );
    const context = {price: 150};

    const result = await staticRuleEvaluator.evaluate(context);
    expect(result).toBe(false);
  });

  // TODO: Fix this test to handle empty or invalid expressions
  // it('should throw an error for invalid expressions', async () => {
  //   const staticRuleEvaluator = new StaticRuleEvaluator(
  //     '3',
  //     'Invalid expression',
  //     'context.invalid > 100'
  //   );

  //   await expect(staticRuleEvaluator.evaluate({})).rejects.toThrow(
  //     'Context is required for static rule'
  //   );
  // });
});
