import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const result = await prisma.user.findUnique({
      where: { id: 1 },
      select: { id: true, email: true, username: true, firstname: true, lastname: true },
    });
    const { text } = req.body;
    const { zUrla } = req.query;
    res.json(result);
  })
  .post(async (req, res) => {
    const { content } = req.body;
    const { fromUrl } = req.query;
    console.log(`content`, content);
    console.log(`fromUrl`, fromUrl);
    res.status(201).json({ ok: 'ok' });
  })
  .put(async (req, res) => {
    const { text } = req.body;
    res.json({ ok: 'ok' });
  })
  .delete(async (req, res) => {
    const { text } = req.body;
    res.json({ ok: 'ok' });
  });
