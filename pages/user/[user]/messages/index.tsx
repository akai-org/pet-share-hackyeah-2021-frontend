import { Item } from '@data/item';
import { User } from '@data/user';
import { Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Messages: NextPage = () => {
  const router = useRouter();

  const messageHistory = [
    new User(
      'Messaged User',
      'https://www.seekpng.com/png/detail/960-9609689_red-question-mark-symbol-question-mark.png',
      4,
      'Warszawa',
      [
        new Item(
          'Koce',
          'Psy',
          new Date(2022, 1),
          'https://homla.com.pl/media/catalog/product/cache/e252c4074c67ade3f792d8397da5c502/5/9/5902869959626.jpg'
        ),
        new Item(
          'Smycze',
          'Psy',
          new Date(2022, 1),
          'https://shop-cdn-m.mediazs.com/bilder/smycz/flexi/cat/new/classic/0/400/65102_flexi_cat_new_classic_xs_hs_3_0.jpg'
        ),
        new Item(
          'Karma',
          'Koty',
          new Date(2022, 1, 1),
          'https://image.ceneostatic.pl/data/products/44596520/i-whiskas-1-lat-z-kurczakiem-w-sosie-karma-dla-kota-puszka-400g.jpg'
        ),
      ]
    ),
    new User(
      'Messaged User',
      'https://www.seekpng.com/png/detail/960-9609689_red-question-mark-symbol-question-mark.png',
      4,
      'Warszawa',
      [
        new Item(
          'Koce',
          'Psy',
          new Date(2022, 1),
          'https://homla.com.pl/media/catalog/product/cache/e252c4074c67ade3f792d8397da5c502/5/9/5902869959626.jpg'
        ),
        new Item(
          'Smycze',
          'Psy',
          new Date(2022, 1),
          'https://shop-cdn-m.mediazs.com/bilder/smycz/flexi/cat/new/classic/0/400/65102_flexi_cat_new_classic_xs_hs_3_0.jpg'
        ),
        new Item(
          'Karma',
          'Koty',
          new Date(2022, 1, 1),
          'https://image.ceneostatic.pl/data/products/44596520/i-whiskas-1-lat-z-kurczakiem-w-sosie-karma-dla-kota-puszka-400g.jpg'
        ),
      ]
    ),
  ];

  const ProfileMessage = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #aaaaaa;
    :hover {
      h4 {
        color: var(--primary);
      }
    }
    :nth-child(1) {
      margin-top: 40px;
    }
    :nth-last-child(1) {
      border-bottom: 1px solid #aaaaaa;
      margin-bottom: 56px;
    }
    img {
      width: 20vw;
      height: 20vw;
    }
    h4 {
      padding-left: 20px;
      color: #666666;
    }
  `;

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {messageHistory.map((messagedUser) => (
        <Link passHref href={`${router.asPath}/${messagedUser.username}`} key={messagedUser.username}>
          <ProfileMessage>
            <img src={messagedUser.profilePicture} alt={messagedUser.username} />
            <Typography variant="h4">{messagedUser.username}</Typography>
          </ProfileMessage>
        </Link>
      ))}
    </Container>
  );
};

export default Messages;
