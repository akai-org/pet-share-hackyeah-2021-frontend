import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from 'db';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const { email, name, image } = user;
      const isExists = await prisma.user.findUnique({ where: { email }, select: { id: true } });
      if (!isExists) {
        await prisma.user.create({
          data: {
            email,
            username: name,
            avatarUrl: image,
            firstname: name,
            lastname: name,
          },
        });
      }
      return true;
    },
  },
});
