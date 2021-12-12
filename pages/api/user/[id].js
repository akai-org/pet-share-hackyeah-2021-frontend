import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const { id } = req.query;
    const result = await prisma.user.findUnique({
      where: { id: +id },
      select: { id: true, username: true, city: true },
    });
    res.json(result);
  });
