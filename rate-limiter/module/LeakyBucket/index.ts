import express from "express";
const router = express.Router();
import LeakyBucket from "./LeakyBucket.ts";

const lb = new LeakyBucket(2, 2); // capacity 2, leak rate 2 units per second

router.get("/hit", (req, res) => {
  if (lb.isAllowed()) {
    res.send("Leaky Bucket Rate Limiter Module");
  } else {
    res.status(429).send("Limit exceeded");
  }
});

export default router;