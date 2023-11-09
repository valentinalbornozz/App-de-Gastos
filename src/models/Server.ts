import express, { Express } from "express";
import { connectDB } from "../config/database";
import userRoutes from "../routes/user.routes"; // Ajusta la ruta según tu estructura de carpetas
import expenseRoutes from "../routes/expense.routes"; // Ajusta la ruta según tu estructura de carpetas

export class Server {
    app: Express;

    constructor() {
        this.app = express();
        this.setupMiddleware();
        this.setupRoutes();
        this.connectionDB();
    }

    private setupMiddleware(): void {
        this.app.use(express.json());
    }

    private setupRoutes(): void {
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/expenses', expenseRoutes);
    }

    private async connectionDB(): Promise<void> {
        await connectDB();
    }

    listen(): void {
        this.app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
}
