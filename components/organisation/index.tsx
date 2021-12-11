import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';

type Props = {
  user: { username: string; address: string };
};

export const Organisation: FunctionComponent<Props> = ({ user }) => {
  const { username, address } = user;

  return (
    <Box
      sx={{
        padding: '1.5em 2em 1em',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#BABABA',
        minHeight: '10em',
        boxShadow: 4,
        borderRadius: 4,
      }}
    >
      <h1 style={{ display: 'inline' }}>{username}</h1>
      <h2 style={{ display: 'inline' }}>{address}</h2>
    </Box>
  );
};
