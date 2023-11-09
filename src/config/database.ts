import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb+srv://valentinalbornozz:GZzaBXLzbRKzXOBm@nombredelcluster.k1aiupf.mongodb.net/App-De-Gastos')
        console.log('Online database')
    } catch (error) {
        console.log(error);
        throw new Error('Error starting database')
    };
}