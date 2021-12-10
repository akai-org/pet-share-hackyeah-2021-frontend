import nc from 'next-connect';

export default nc()
  .get(async (req, res) => {
    res.json({info:"ok"});
  });
