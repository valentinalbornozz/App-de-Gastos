import mongoose, { Schema, Document } from 'mongoose';

export interface Expense extends Document {
    description: string;
    amount: number;
    user: mongoose.Types.ObjectId;
}

const expenseSchema: Schema = new Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<Expense>('Expense', expenseSchema);
