import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const { userId } = req.query;
    const result = await prisma.message.findMany({
      where: {
        OR: [{ senderId: +userId }, { recipientId: +userId }],
      },
      select: { message: true, senderId: true, recipientId: true, createdAt: true },
    });
    res.json(result);
  });