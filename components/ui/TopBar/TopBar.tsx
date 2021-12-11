import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { MdFavoriteBorder, MdOutlineSettings, MdSearch } from 'react-icons/md';
import { IconButton, TextField } from '@mui/material';
import Link from 'next/link';
// @ts-ignore
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useAppContext } from '@context/AppContext';

const ToolbarContainer = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyleBox = styled(Box)`
  flex-grow: 1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  position: sticky;
  top: 0;
  right: calc(50% - 25px);
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border: 3px solid black;
  border-radius: 30px;
  :hover {
    cursor: pointer;
  }
`;

const StyleTextField = styled(TextField)`
  width: 80%;
  margin: 0 10% 0 10%;
`;

export const Topbar: FunctionComponent = () => {
  const { user, updateUser } = useAppContext();
  const [isSearch, setSearch] = useState(false);
  const router = useRouter();

  return (
    <StyleBox>
      <ToolbarContainer color="regular">
        <div>
          <IconButton
            onClick={() => {
              router.push('/user/favorites');
            }}
          >
            <MdFavoriteBorder size={30} color="var(--secondary)" />
          </IconButton>
          <IconButton
            onClick={() => {
              router.push('/user/settings');
            }}
          >
            <MdOutlineSettings size={30} color="var(--secondary)" />
          </IconButton>
          <IconButton
            onClick={() => {
              setSearch(!isSearch);
            }}
          >
            <MdSearch size={30} color="var(--secondary)" />
          </IconButton>
        </div>
        <Logo src="/resources/favicon.png" />
        {user != null ? (
          <Link href={`/user/${user.username}`}>
            <Avatar src="/resources/schronisko.jpg" />
          </Link>
        ) : (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              updateUser('dummyUser', '123');
            }}
          >
            Login
          </Button>
        )}
      </ToolbarContainer>
      {isSearch && <StyleTextField id="standard-basic" label="Search" variant="standard" />}
    </StyleBox>
  );
};
