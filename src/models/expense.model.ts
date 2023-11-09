// expense.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import { User } from './user.model';

export interface Expense extends Document {
    description: string;
    amount: number;
    user: string | User; // Referencia al modelo de usuario
}

const expenseSchema = new Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Referencia al modelo de usuario
});

export default mongoose.model<Expense>('Expense', expenseSchema);
