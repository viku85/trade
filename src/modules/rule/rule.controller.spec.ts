import {
  RuleController
} from './rule.controller'; // Adjust the import path as necessary
import {
  RuleService
} from './rule.service'; // Adjust the import path as necessary
import {
  Request,
  Response
} from 'express'; // Assuming using Express, adjust if needed
import {
  Rule
} from '../../lib/rule-engine/types/Rule'; // Adjust the import path as necessary

// Mock the RuleService
jest.mock('./rule.service');
const mockRuleService = RuleService as jest.MockedConstructor < RuleService > ;


describe('RuleController', () => {
  let ruleController: RuleController;
  let mockRequest: Partial < Request > ;
  let mockResponse: Partial < Response > ;
  let mockRuleServiceInstance: jest.Mocked < RuleService > ;

  beforeEach(() => {
    // Create a new instance of the mocked RuleService for each test
    mockRuleServiceInstance = new mockRuleService() as jest.Mocked < RuleService > ;
    ruleController = new RuleController(mockRuleServiceInstance);

    // Initialize mock request and response objects
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createRule', () => {
    it('should create a rule and return 201 with the created rule', async () => {
      const newRule: Rule = {
        id: '1',
        name: 'Test Rule',
        symbol: 'AAPL',
        conditions: {
          type: 'STATIC',
          field: 'price',
          operator: '>',
          value: 150
        },
        action: {
          type: 'BUY'
        },
        enabled: true,
      };
      mockRequest.body = newRule;
      mockRuleServiceInstance.createRule.mockResolvedValue(newRule);

      await ruleController.createRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.createRule).toHaveBeenCalledWith(newRule);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(newRule);
    });

    it('should return 400 if rule creation fails (e.g., validation error)', async () => {
      const invalidRule = {}; // Invalid rule data
      mockRequest.body = invalidRule;
      const errorMessage = 'Invalid rule data';
      mockRuleServiceInstance.createRule.mockRejectedValue(new Error(errorMessage));

      await ruleController.createRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.createRule).toHaveBeenCalledWith(invalidRule);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: errorMessage
      });
    });
  });

  describe('getRuleById', () => {
    it('should return a rule by ID with status 200', async () => {
      const ruleId = '1';
      const foundRule: Rule = {
        id: ruleId,
        name: 'Found Rule',
        symbol: 'GOOG',
        conditions: {
          type: 'STATIC',
          field: 'volume',
          operator: '>',
          value: 1000000
        },
        action: {
          type: 'SELL'
        },
        enabled: true,
      };
      mockRequest.params = {
        id: ruleId
      };
      mockRuleServiceInstance.getRuleById.mockResolvedValue(foundRule);

      await ruleController.getRuleById(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.getRuleById).toHaveBeenCalledWith(ruleId);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(foundRule);
    });

    it('should return 404 if rule is not found', async () => {
      const ruleId = 'non-existent-id';
      mockRequest.params = {
        id: ruleId
      };
      mockRuleServiceInstance.getRuleById.mockResolvedValue(null);

      await ruleController.getRuleById(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.getRuleById).toHaveBeenCalledWith(ruleId);
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.send).toHaveBeenCalledWith('Rule not found');
    });

    it('should return 500 if an error occurs', async () => {
      const ruleId = '1';
      mockRequest.params = {
        id: ruleId
      };
      const errorMessage = 'Database error';
      mockRuleServiceInstance.getRuleById.mockRejectedValue(new Error(errorMessage));

      await ruleController.getRuleById(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceService.getRuleById).toHaveBeenCalledWith(ruleId);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: errorMessage
      });
    });
  });

  describe('getAllRules', () => {
    it('should return all rules with status 200', async () => {
      const allRules: Rule[] = [{
        id: '1',
        name: 'Rule 1',
        symbol: 'AAPL',
        conditions: {
          type: 'STATIC',
          field: 'price',
          operator: '>',
          value: 150
        },
        action: {
          type: 'BUY'
        },
        enabled: true,
      }, {
        id: '2',
        name: 'Rule 2',
        symbol: 'GOOG',
        conditions: {
          type: 'STATIC',
          field: 'volume',
          operator: '>',
          value: 1000000
        },
        action: {
          type: 'SELL'
        },
        enabled: true,
      }, ];
      mockRuleServiceInstance.getAllRules.mockResolvedValue(allRules);

      await ruleController.getAllRules(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.getAllRules).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(allRules);
    });

    it('should return an empty array if no rules exist', async () => {
      const allRules: Rule[] = [];
      mockRuleServiceInstance.getAllRules.mockResolvedValue(allRules);

      await ruleController.getAllRules(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.getAllRules).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(allRules);
    });

    it('should return 500 if an error occurs', async () => {
      const errorMessage = 'Database error';
      mockRuleServiceInstance.getAllRules.mockRejectedValue(new Error(errorMessage));

      await ruleController.getAllRules(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.getAllRules).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: errorMessage
      });
    });
  });

  describe('updateRule', () => {
    it('should update a rule and return 200 with the updated rule', async () => {
      const ruleId = '1';
      const updatedRuleData: Partial < Rule > = {
        enabled: false
      };
      const updatedRule: Rule = {
        id: ruleId,
        name: 'Test Rule',
        symbol: 'AAPL',
        conditions: {
          type: 'STATIC',
          field: 'price',
          operator: '>',
          value: 150
        },
        action: {
          type: 'BUY'
        },
        enabled: false,
      };
      mockRequest.params = {
        id: ruleId
      };
      mockRequest.body = updatedRuleData;
      mockRuleServiceInstance.updateRule.mockResolvedValue(updatedRule);

      await ruleController.updateRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.updateRule).toHaveBeenCalledWith(ruleId, updatedRuleData);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedRule);
    });

    it('should return 404 if rule to update is not found', async () => {
      const ruleId = 'non-existent-id';
      const updatedRuleData: Partial < Rule > = {
        enabled: false
      };
      mockRequest.params = {
        id: ruleId
      };
      mockRequest.body = updatedRuleData;
      mockRuleServiceInstance.updateRule.mockResolvedValue(null);

      await ruleController.updateRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.updateRule).toHaveBeenCalledWith(ruleId, updatedRuleData);
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.send).toHaveBeenCalledWith('Rule not found');
    });

    it('should return 400 if update data is invalid', async () => {
      const ruleId = '1';
      const invalidUpdateData = {
        invalidField: 'value'
      };
      mockRequest.params = {
        id: ruleId
      };
      mockRequest.body = invalidUpdateData;
      const errorMessage = 'Invalid update data';
      mockRuleServiceInstance.updateRule.mockRejectedValue(new Error(errorMessage)); // Assuming updateRule throws error on invalid data

      await ruleController.updateRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.updateRule).toHaveBeenCalledWith(ruleId, invalidUpdateData);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: errorMessage
      });
    });

    it('should return 500 if an error occurs during update', async () => {
      const ruleId = '1';
      const updatedRuleData: Partial < Rule > = {
        enabled: false
      };
      mockRequest.params = {
        id: ruleId
      };
      mockRequest.body = updatedRuleData;
      const errorMessage = 'Database error during update';
      mockRuleServiceInstance.updateRule.mockRejectedValue(new Error(errorMessage));

      await ruleController.updateRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.updateRule).toHaveBeenCalledWith(ruleId, updatedRuleData);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: errorMessage
      });
    });
  });

  describe('deleteRule', () => {
    it('should delete a rule and return 204', async () => {
      const ruleId = '1';
      mockRequest.params = {
        id: ruleId
      };
      mockRuleServiceInstance.deleteRule.mockResolvedValue(true); // Indicate successful deletion

      await ruleController.deleteRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.deleteRule).toHaveBeenCalledWith(ruleId);
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled(); // 204 typically has no body
    });

    it('should return 404 if rule to delete is not found', async () => {
      const ruleId = 'non-existent-id';
      mockRequest.params = {
        id: ruleId
      };
      mockRuleServiceInstance.deleteRule.mockResolvedValue(false); // Indicate rule not found

      await ruleController.deleteRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.deleteRule).toHaveBeenCalledWith(ruleId);
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.send).toHaveBeenCalledWith('Rule not found');
    });

    it('should return 500 if an error occurs during deletion', async () => {
      const ruleId = '1';
      mockRequest.params = {
        id: ruleId
      };
      const errorMessage = 'Database error during deletion';
      mockRuleServiceInstance.deleteRule.mockRejectedValue(new Error(errorMessage));

      await ruleController.deleteRule(mockRequest as Request, mockResponse as Response);

      expect(mockRuleServiceInstance.deleteRule).toHaveBeenCalledWith(ruleId);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: errorMessage
      });
    });
  });
});