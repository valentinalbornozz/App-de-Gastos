// user.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
  expenses: string[]; // Array de IDs de gastos
}

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }],
});

export default mongoose.model<User>('User', userSchema);
