import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const {id} = req.query;
    const result = await prisma.item.findMany({
      select: {
        name: true,
        description: true,
        brandId: true,
        typeId: true,
        expirationDate: true,
        imageUrl: true,
        createdAt: true

      },
      where: { typeId:+id }
    });
    res.json(result);
  });
