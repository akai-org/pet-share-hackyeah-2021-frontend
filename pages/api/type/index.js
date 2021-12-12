import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const result = await prisma.itemType.findMany();
    res.json(result);
  })
  .post(async (req, res) => {
    const { name } = req.body;
    await prisma.itemType.create({
      data: {
        name
      }
    })
    res.status(201).json({ response: "ok"});
  })
;
