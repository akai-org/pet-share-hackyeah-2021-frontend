import { Box, Container, Rating } from '@mui/material';
import type { NextPage } from 'next';
import { User as UserData } from '@data/user';
import { ItemCard } from '@components/ui/ItemCard';
import { Item } from '@data/item';

const User: NextPage = () => {
  const dummyUser = new UserData(
    'Username',
    'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
    4,
    'Localization',
    [
      new Item('test'),
      new Item('test2'),
      new Item('test3'),
      new Item('test4'),
      new Item('test5'),
      new Item('test6'),
      new Item('test7'),
      new Item('test8'),
      new Item('test9'),
    ]
  );

  return (
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
        <img src={dummyUser.profilePicture} alt="sry" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        <h1 style={{ margin: '0 0 0 1em' }}>{dummyUser.username}</h1>
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
        }}
      >
        {dummyUser.items.map((item) => (
          <ItemCard key="itemcard" name={item.name} itemId={item.name} />
        ))}
      </Box>
    </Container>
  );
};

export default User;
