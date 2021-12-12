import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const { id } = req.query;
    const result = await prisma.itemNeed.findMany({
      select: {
        id: true,
        amount: true,
        createdAt: true,
        item: true,
        user: true
      },
      where: { userId: +id }

    });
    res.json(result);
  })
  .delete( async (req, res) => {
    const { id } = req.query;
    const result = await prisma.itemNeed.delete({
      where: { userId: +id }
    });
    res.json(result);
  });
//update id, usuniecie id, pobranie id