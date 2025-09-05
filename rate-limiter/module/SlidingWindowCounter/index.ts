import express from 'express'
const router = express.Router();
import SlidingWindowCounter  from './SlidingWindowCounter.ts';
const swc = new SlidingWindowCounter(2,1000); 
router.get('/hit', (req, res) => {
    if(swc.isAllowed())
  res.send('Sliding Window Counter Rate Limiter Module');
else{
    res.status(429).send('limit exceeded');
}
});

export default router;