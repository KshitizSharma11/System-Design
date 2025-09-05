import express from 'express';
import tokenRouter from './module/token-bucket/index.ts';
import FixedWindowRouter from './module/FixedWindowCounter/index.ts';
import SlidingWinRouter from './module/SlidingWindowLog/index.ts';
import SlidingWindowRouter from './module/SlidingWindowCounter/index.ts';
const app=express();

app.use('/tokenBucket', tokenRouter);
app.use('/fwc', FixedWindowRouter);
app.use('/swl', SlidingWinRouter);
app.use('/swc', SlidingWindowRouter);
app.get('/',(req,res)=>{
    res.send("Welcome to the Rate Limiter Project");
})
app.listen(3000,()=>{
    console.log("server up on 3000");
})