import { Box, Container } from '@mui/material';
import { Organisation } from '@components/organisation';
import type { NextPage } from 'next';

const Users: NextPage = () => {
  const organisations = [
    { username: 'nazwa organiacji', address: 'adres organizacji' },
    { username: 'nazwa organiacji', address: 'adres organizacji' },
    { username: 'nazwa organiacji', address: 'adres organizacji' },
    { username: 'nazwa organiacji', address: 'adres organizacji' },
    { username: 'nazwa organiacji', address: 'adres organizacji' },
  ];

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {organisations.map((org) => (
        <Box sx={{ margin: '1.5em 0' }}>
          <Organisation user={org} />
        </Box>
      ))}
    </Container>
  );
};

export default Users;
