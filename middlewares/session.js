import { getSession } from 'next-auth/react';

export const session = async (req, res, next) => {
  if (!req.session) {
    req.session = await getSession({ req });
  }

  if (!req.session) {
    return res.status(401).end();
  }

  return next();
};
