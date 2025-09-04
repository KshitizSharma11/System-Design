import express from "express";
import FixedWindowCounter from "./FixedWindCnt.ts";
const router= express.Router();


const fwc = new FixedWindowCounter(1000, 2);
router.get('/hit',(req,res)=>{
    if(fwc.isAllowed()){
    res.send("Fixed Window Counter Rate Limiter");
    }else{
        res.status(429).send("Too Many Requests");
    }

})

export default router;