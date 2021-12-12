import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {Typography} from '@mui/material';
import styled from 'styled-components';
import Link from 'next/link';

const Messages: NextPage = () => {
  const router = useRouter();

  const profiles = [
    {
      username: 'Imie Nazwisko',
      email: 'email',
      imageUrl: 'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      id: 1
    },
    {
      username: 'Imie Nazwisko',
      email: 'email',
      imageUrl: 'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      id: 2
    },
    {
      username: 'Imie Nazwisko',
      email: 'email',
      imageUrl: 'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      id: 3
    },
    {
      username: 'Imie Nazwisko',
      email: 'email',
      imageUrl: 'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      id: 4
    },
  ];

  const ProfileMessage = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #aaaaaa;
  
    :hover{
      h4 {
        color: var(--primary);
      }
    }
    
    :nth-child(1) {
      margin-top: 40px
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
  `

  return (
    <div>
      {profiles.map((profile) => (
        <Link href="/">
          <ProfileMessage>
            <img src={profile.imageUrl} alt={profile.username}/>
            <Typography variant="h4">{profile.username}</Typography>
          </ProfileMessage>
        </Link>
      ))}
    </div>);
};

export default Messages;
