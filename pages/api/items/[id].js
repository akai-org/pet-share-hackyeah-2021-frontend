import nc from 'next-connect';
import { prisma } from 'db';

export default nc().get(async (req, res) => {
  const { id } = req.query;
  const result = await prisma.item.findUnique({
    where: { id: +id },
    select: {
      id: true,
      name: true,
      description: true,
      brandId: true,
      typeId: true,
      expirationDate: true,
      imageUrl: true,
      itemBrand: true,
      itemType: true,
      createdAt: true,
    },
  });
  res.json(result);
});
