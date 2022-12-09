// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { username, password } = req.body


  if (username === 'admin' && password === 'admin') {
    res.status(200).json({ authenticated: true })
  } else {
    res.status(403).json({ error: 'Invalid username or password'})
  }

}
