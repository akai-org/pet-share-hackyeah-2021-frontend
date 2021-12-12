import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const { id } = req.query;
    const result = await prisma.itemListing.findUnique({
      select: {
        price: true,
        createdAt: true,
        item: true,
        user: true
      },
      where: { id: +id }

    });
    res.json(result);
  })
  .post(async (req, res) => {
    const { price, itemId, userId } = req.body;
    await prisma.itemListing.create({
      data: {
        price:+price,
        itemId:+itemId,
        userId:+userId,
      }
    })
    res.status(201).json({ response: "ok"});
  })
  .delete( async (req, res) => {
    const { id } = req.query;
    const result = await prisma.itemListing.delete({
      where: { id: +id }
    });
    res.json(result);
  });
//update id, usuniecie id, pobranie id