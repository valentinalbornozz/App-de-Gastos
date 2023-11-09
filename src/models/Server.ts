import express,  {Express} from "express";

import {connectDB} from "../config/database";

export class Server {
    app: Express;

    constructor(){
        this.app = express();
        this.connectionDB();
    }

    async connectionDB(): Promise<void>{
        await connectDB();
    }
    listen(): void{
        this.app.listen(3000, ()=>{
            console.log("running in the port 3000")
        })
    }
}