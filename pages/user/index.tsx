import { Container } from '@mui/material';
import type { NextPage } from 'next';

type Props = {
  user: { username: string; address: string };
};

const User: NextPage<Props> = ({ user }) => {
  const { username, address } = user;
  return <Container>123</Container>;
};

export default User;
