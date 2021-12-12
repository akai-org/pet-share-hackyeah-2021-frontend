import nc from 'next-connect';
import { prisma } from 'db';

export default nc().get(async (req, res) => {
  const { id } = req.query;
  const result = await prisma.user.findUnique({
    where: { id: +id },
    select: { id: true, email: true, username: true, firstname: true, lastname: true },
  });
  res.json(result);
});
