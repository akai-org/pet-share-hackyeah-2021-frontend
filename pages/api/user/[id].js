import nc from 'next-connect';
import { prisma } from 'db';

export default nc().get(async (req, res) => {
  const { id } = req.query;
  const result = await prisma.user.findUnique({
    where: { id: +id },
    select: {
      username: true,
      firstname: true,
      lastname: true,
      avatarUrl: true,
      address: true,
      phone: true,
      isActive: true,
      isOrganization: true,
      nip: true,
      rating: true,
    },
  });
  res.json(result);
});
