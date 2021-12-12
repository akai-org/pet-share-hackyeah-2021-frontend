import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const result = await prisma.user.findMany({
      where: { isOrganization: true },
      select: { id: true, username: true, city: true, address: true },
    });
    res.json(result);
  });