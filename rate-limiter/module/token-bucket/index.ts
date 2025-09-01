import express from 'express'
import TokenBucket from './TokenBucket.ts';
const router=express.Router();
const tb=new TokenBucket(1, 2);
router.get('/hit',(req,res)=>{
    if(tb.tryRemoveToken()){
        res.status(200).send("Token granted");
    }else{
        res.status(429).send("Rate limit exceeded");
    }
})

export default router;