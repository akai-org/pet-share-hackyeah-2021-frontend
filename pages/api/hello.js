import nc from 'next-connect';
import { prisma } from 'db';

export default nc()
  .get(async (req, res) => {
    const { text } = req.body;
    const { zUrla } = req.query;
    res.json({ some: 'ok' });
  })
  .post(async (req, res) => {
    const { text } = req.body;
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
