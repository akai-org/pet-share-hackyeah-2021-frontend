import { useAppContext } from '@context/AppContext';
import { User } from '@data/user';
import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Messages: NextPage = () => {
  const router = useRouter();
  const { user } = useAppContext();

  const messageHistory = [
    new User(
      'Test',
      'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      4,
      'City',
      []
    ),
    new User(
      'Test2',
      'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      4,
      'City',
      []
    ),
    new User(
      'Test3',
      'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      4,
      'City',
      []
    ),
    new User(
      'Test4',
      'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      4,
      'City',
      []
    ),
    new User(
      'Test5',
      'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      4,
      'City',
      []
    ),
  ];

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {messageHistory.map((messagedUser) => (
        <Link passHref href={`${router.asPath}/${messagedUser.username}`}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100px',
              width: '100px',
              margin: '1em',
            }}
          >
            <img src={messagedUser.profilePicture} alt="sry" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            <h1 style={{ margin: '0 0 0 1em' }}>{messagedUser.username}</h1>
          </Box>
        </Link>
      ))}
    </Container>
  );
};

export default Messages;
