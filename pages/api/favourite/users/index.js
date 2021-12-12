import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .post(async (req, res) => {
    const { userId, favouriteUserId } = req.body;
    await prisma.favouriteUsers.create({
      data: { userId, favouriteUserId },
    });
    res.status(201).json({ response: 'ok' });
  });