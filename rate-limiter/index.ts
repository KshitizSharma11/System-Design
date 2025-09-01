import express from 'express';
import tokenRouter from './module/token-bucket/index.ts';
const app=express();

app.use('/tokenBucket', tokenRouter);
app.get('/',(req,res)=>{
    res.send("Welcome to the Rate Limiter Project");
})
app.listen(3000,()=>{
    console.log("server up on 3000");
})