// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { extract } from 'article-parser';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    
    if (!req.body.url) {
      res.status(500).json({ error: "No URL to parse.", body: req.body });
    };
  
    const article = await extract(req.body.url)
    res.status(200).json(article.content);

  } catch (error) {
    
    console.log(error);
    res.status(500).json({error: "Internal server error."})

  };

};
