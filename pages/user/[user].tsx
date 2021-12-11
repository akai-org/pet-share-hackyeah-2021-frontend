import { Container } from '@mui/material';
import type { NextPage } from 'next';
import { User as UserData } from '@data/user';
import Image from 'next/image';
import { Rating } from '@components/ui/Rating';
import { Localization } from '@components/ui/Localization';
import { Item } from '@components/ui/Item';

const User: NextPage = () => {
  const dummyUser = new UserData(
    '123',
    'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
    4,
    'city',
    []
  );

  return (
    <Container>
      <Container>
        <img src={dummyUser.profilePicture} alt="sry" style={{ width: '50px', height: '50px' }} />
        <h1>{dummyUser.username}</h1>
      </Container>
      <Rating />
      <Localization />
      {dummyUser.items.map((item) => {
        <Item />;
      })}
    </Container>
  );
};

export default User;
