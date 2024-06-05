import { NextApiRequest, NextApiResponse } from 'next';
import User from '../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const users = await User.findAll();
        res.status(200).json(users);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'POST':
      try {
        const { username, email } = req.body;
        const user = await User.create({ username, email });
        res.status(201).json(user);
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}
