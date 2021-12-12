import { Box, Container, Rating } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAppContext } from '@context/AppContext';
import { ItemCard } from '@components/ui/ItemCard/ItemCard';

const User: NextPage = () => {
  const router = useRouter();
  const { user, fetchUser } = useAppContext();

  let dummyUser = null;
  if (router.query.user) {
    if (router.query.user === user?.username) {
      dummyUser = user;
    } else {
      dummyUser = fetchUser(router.query.user, '123');
    }
  }

  return (
    dummyUser && (
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '100px',
            width: '100%',
          }}
        >
          <img src={dummyUser.profilePicture} alt="sry" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <h2 style={{ width: '100%', margin: '0 0 0 1em' }}>{dummyUser.username}</h2>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: '0 0.5em 0 0' }}>Ocena:</h3>
          <Rating name="read-only" value={dummyUser.rating} readOnly />
        </Box>
        <Box>
          <h3>Lokalizacja: {dummyUser.localization}</h3>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            paddingBottom: '5em',
          }}
        >
          {dummyUser.items.map((item) => (
            <ItemCard
              name={item.name}
              category={item.category}
              date={item.date}
              image={item.image}
              itemId={item.name}
              key={item.name}
            />
          ))}
        </Box>
      </Container>
    )
  );
};

export default User;
