import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const result = await prisma.itemNeed.findMany({
      select: {
        id: true,
        amount: true,
        createdAt: true,
        item: true,
        user: true
      }
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

  });
