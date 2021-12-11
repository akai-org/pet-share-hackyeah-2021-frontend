import {Box, Container, Rating, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {ItemCard} from '@components/ui/ItemCard/ItemCard';
import {useSession} from 'next-auth/react';

const User: NextPage = () => {
  const {data: session} = useSession();
  const router = useRouter();

  if (!session) {
    return <Typography variant="h1">Zaloguj się</Typography>;
  }

  return (
    session && (
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '100px',
            width: '100px',
            background: 'gray ',
          }}
        >
          <img src={session.profilePicture} alt="sry" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <h1 style={{ margin: '0 0 0 1em' }}>{session.username}</h1>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: '0 0.5em 0 0' }}>Ocena:</h3>
          <Rating name="read-only" value={session.rating} readOnly />
        </Box>
        <Box>
          <h3>Lokalizacja: {session.localization}</h3>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          {session.items.map((item) => (
            <ItemCard name={item.name} itemId={item.name} />
          ))}
        </Box>
      </Container>
    )
  );
};

export default User;
