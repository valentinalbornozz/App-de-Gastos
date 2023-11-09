import { Router } from 'express';
import { getAllExpenses, createExpense, getExpenseById } from '../controllers/expense.controller';

const router = Router();

router.get('/', getAllExpenses);
router.post('/', createExpense);
router.get('/:id', getExpenseById);


export default router;
