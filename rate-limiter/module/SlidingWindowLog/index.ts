import express from 'express';
import SlidingWindowLog from './SlidingWinLog.ts';  
const router=express.Router();
const swl = new SlidingWindowLog(1000, 2);
router.get('/hit',(req,res)=>{
    if(swl.isAllowed())
    res.send("Hit the Fixed Window Counter Rate Limiter");
else
    res.status(429).send("Too many requests - Fixed Window Counter Rate Limiter");
});

export default router;