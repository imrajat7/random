import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  // console.log('REQUEST BODY', req.query);
  // res.setHeader('Set-Cookie', 'areyouprogrammer=true')
  res.statusCode = 404;

  res.json({num: Math.floor(Math.random()*10)});
}
