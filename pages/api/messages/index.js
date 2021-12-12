import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .post(async (req, res) => {
    const { senderId, recipientId, message } = req.body;
    await prisma.message.create({
      data: { senderId, recipientId, message },
    });
    res.status(201).json({ response: 'ok' });
  });