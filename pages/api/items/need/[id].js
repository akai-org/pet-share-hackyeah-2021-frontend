import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const { id } = req.query;
    const result = await prisma.itemNeed.findUnique({
      select: {
        amount: true,
        createdAt: true,
        item: true,
        user: true
      },
      where: { id: +id }

    });
    res.json(result);
  })
  .post(async (req, res) => {
    const { amount, itemId, userId } = req.body;
    await prisma.itemNeed.create({
      data: {
        amount:+amount,
        itemId:+itemId,
        userId:+userId,
      }
    })
    res.status(201).json({ response: "ok"});
  })
  .delete( async (req, res) => {
    const { id } = req.query;
    const result = await prisma.itemNeed.delete({
      where: { id: +id }
    });
    res.json(result);
  });
//update id, usuniecie id, pobranie id