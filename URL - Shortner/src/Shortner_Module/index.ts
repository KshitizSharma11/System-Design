import express from 'express';
const router = express.Router();
import { createShortUrl, redirectToOriginalUrl } from './controller/index.js';

router.post('/', createShortUrl);
router.get('/:code', redirectToOriginalUrl);

export default router;
