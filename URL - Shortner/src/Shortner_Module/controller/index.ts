import express from 'express';

export async function createShortUrl(req: express.Request, res: express.Response) {
    res.send('Shortened URL');
}

export async function redirectToOriginalUrl(req: express.Request, res: express.Response) {
    res.send('Redirecting to original URL');
}
