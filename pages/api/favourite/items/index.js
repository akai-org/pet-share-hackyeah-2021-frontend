import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .post(async (req, res) => {
    const { userId, itemId } = req.body;
    await prisma.favouriteItems.create({
      data: { userId, itemId },
    });
    res.status(201).json({ response: 'ok' });
  });