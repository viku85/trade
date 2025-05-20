import {Router} from 'express';
import {container} from 'tsyringe';
import {RuleController} from './rule.controller';

const router = Router();
const controller = container.resolve(RuleController);

// POST /api/rules - Create a new trading rule
router.post('/', async (req, res) => {
  try {
    const rule = await controller.createRule(req.body);
    res.status(201).json(rule);
  } catch (err: any) {
    res.status(400).json({error: err.message});
  }
});

// PUT /api/rules/:id - Update an existing trading rule
router.put('/:id', async (req, res) => {
  try {
    const rule = await controller.updateRule(req.params.id, req.body);
    res.status(200).json(rule);
  } catch (err: any) {
    res.status(400).json({error: err.message});
  }
});

// DELETE /api/rules/:id - Delete a trading rule
router.delete('/:id', async (req, res) => {
  try {
    await controller.deleteRule(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({error: err.message});
  }
});

// GET /api/rules - List all trading rules
router.get('/', async (req, res) => {
  try {
    const rules = await controller.getAllRules();
    res.status(200).json(rules);
  } catch (err: any) {
    res.status(500).json({error: err.message});
  }
});

// GET /api/rules/user/:userId - Get all rules for a specific user
router.get('/user/:userId', async (req, res) => {
  try {
    const rules = await controller.getRulesByUser(req.params.userId);
    res.status(200).json(rules);
  } catch (err: any) {
    res.status(500).json({error: err.message});
  }
});

// GET /api/rules/:id - Get a single trading rule by ID
router.get('/:id', async (req, res) => {
  try {
    const rule = await controller.getRuleById(req.params.id);
    if (rule) {
      res.status(200).json(rule);
    } else {
      res.status(404).json({error: 'Rule not found'});
    }
  } catch (err: any) {
    res.status(500).json({error: err.message});
  }
});

export default router;
