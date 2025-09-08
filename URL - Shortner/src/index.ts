import express from 'express';
import ShortnerRouter from './Shortner_Module/index.js';
const app = express();
app.use('/', ShortnerRouter);
function startServer() {
    

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    }
);
}

startServer();