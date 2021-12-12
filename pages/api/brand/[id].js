import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const {id} = req.query;
    const result = await prisma.itemBrand.findUnique({
      where: { id:+id }
    });
    res.json(result);
  });
