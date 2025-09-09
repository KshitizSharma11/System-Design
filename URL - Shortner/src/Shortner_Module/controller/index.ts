import express from "express";
import { Db } from "../../Db/Db.js";
import Shortner  from "../model/index.js";
import { encode } from "../../Util/Generator.js";

const repo = Db.getRepository(Shortner);

export async function createShortUrl(req: express.Request, res: express.Response) {
  try {
   const { originalUrl } = req.body;
  const count = await Db.getRepository(Shortner).count();
  const shortCode = encode(count + 1);

  const short = Db.getRepository(Shortner).create({ originalUrl, shortCode });
  await Db.getRepository(Shortner).save(short);


    res.json({
      message: "✅ Shortened URL created",
      shortUrl: `http://localhost:3000/${shortCode}`
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error creating short URL");
  }
}

export async function redirectToOriginalUrl(req: express.Request, res: express.Response) {
  try {
    const { code } = req.params;

    
    const entry = await repo.findOne({ where: { shortCode: code } });

    if (!entry) {
      return res.status(404).send("Not found");
    }

    res.redirect(301,entry.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error redirecting");
  }
}
