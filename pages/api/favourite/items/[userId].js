import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const { userId } = req.query;
    const result = await prisma.favouriteItems.findMany({
      where: { userId: +userId },
      selects: { item: true },
    });
    res.json(result);
  });
