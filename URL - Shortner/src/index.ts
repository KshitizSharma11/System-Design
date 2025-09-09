import express from 'express';
import ShortnerRouter from './Shortner_Module/index.js';
import { Db } from './Db/Db.js';


const app = express();
app.use('/', ShortnerRouter);
async function startServer() {
    try{
    await Db.initialize();
    console.log("Database connected successfully");
    }catch(error){
        console.error("Error during Data Source initialization:", error);
        return;
    }

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    }
);
}

startServer();