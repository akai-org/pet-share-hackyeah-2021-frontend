import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const { id } = req.query;
    const result = await prisma.itemListing.findMany({
      select: {
        id: true,
        price: true,
        item: true,
        user: true,
        createdAt: true
      },
      where: { userId: +id }

    });
    res.json(result);
  })
  .delete( async (req, res) => {
    const { id } = req.query;
    const result = await prisma.itemListing.delete({
      where: { userId: +id }
    });
    res.json(result);
  });
//update id, usuniecie id, pobranie id