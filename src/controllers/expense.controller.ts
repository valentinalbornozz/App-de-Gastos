import { Request, Response } from 'express';
import Expense from '../models/expense.model';
import User from '../models/user.model';


export const getAllExpenses = async (_req: Request, res: Response) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createExpense = async (req: Request, res: Response) => {
    try {
        const { description, amount, userId } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const newExpense = new Expense({
            description,
            amount,
            user: user._id, // Asignar el ID del usuario al campo user
        });

        const savedExpense = await newExpense.save();

        // Agregar el nuevo gasto al usuario
        user.expenses.push(savedExpense._id);
        await user.save();

        res.status(201).json(savedExpense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getExpenseById = async (req: Request, res: Response) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (expense) {
            res.status(200).json(expense);
        } else {
            res.status(404).json({ message: 'Expense not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

