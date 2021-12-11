import { Box, Container, Rating } from '@mui/material';
import type { NextPage } from 'next';
import { ItemCard } from '@components/ui/ItemCard';
import { useAppContext } from '@context/AppContext';

const User: NextPage = () => {
  const { user } = useAppContext();

  return (
    user && (
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
          <img src={user.profilePicture} alt="sry" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <h1 style={{ margin: '0 0 0 1em' }}>{user.username}</h1>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: '0 0.5em 0 0' }}>Ocena:</h3>
          <Rating name="read-only" value={user.rating} readOnly />
        </Box>
        <Box>
          <h3>Lokalizacja: {user.localization}</h3>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          {user.items.map((item) => (
            <ItemCard name={item.name} itemId={item.name} />
          ))}
        </Box>
      </Container>
    )
  );
};

export default User;
