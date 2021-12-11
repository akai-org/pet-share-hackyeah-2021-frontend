import { Container, Button } from '@mui/material';
import type { NextPage } from 'next';
import Router from 'next/router';

const Home: NextPage = () => {
  const { user } = useAppContext();
  function UsersPage(): void {
    Router.push('/social/users');
  }

  function ListPage(): void {
    Router.push('/market/browse');
  }
  
  return (
    <Container
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>PetApp</h1>
      <Button
        sx={{
          padding: '1.5em 2em 3em',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#BABABA',
          fontSize: '1.25em',
          fontWeight: 'bold',
          color: '#000',
          boxShadow: 4,
          borderRadius: 4,
        }}
        onClick={UsersPage}
      >
        Fundacje
      </Button>
      <Button
        sx={{
          padding: '1.5em 2em 3em',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#BABABA',
          fontSize: '1.25em',
          fontWeight: 'bold',
          color: '#000',
          boxShadow: 4,
          borderRadius: 4,
        }}
        onClick={ListPage}
      >
        Lista przedmiotów
      </Button>
    </Container>
  );
};

export default Home
