import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const result = await prisma.item.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        brandId: true,
        typeId: true,
        expirationDate: true,
        imageUrl: true,
        createdAt: true,
        itemBrand: true,
        itemType: true
      }
    });
    res.json(result);
  })
  .post(async (req, res) => {
    const { name, description, brandId, typeId, expirationDate, imageUrl, createdAt } = req.body;
    await prisma.item.create({
      data: {
        name,
        description,
        brandId:+brandId,
        typeId:+typeId,
        expirationDate,
        imageUrl
      }
    })
    res.status(201).json({ response: "ok"});
  })
;
