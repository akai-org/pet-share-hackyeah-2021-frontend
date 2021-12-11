import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { MdFavoriteBorder, MdOutlineSettings, MdSearch } from 'react-icons/md';
import { IconButton, TextField } from '@mui/material';
// @ts-ignore
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useAppContext } from '@context/AppContext';

const ToolbarContainer = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyleBox = styled(Box)`
  flex-grow: 1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: min-content;
  background-color: white;
`;

const StyleTextField = styled(TextField)`
  width: 80%;
`;

export const Topbar: FunctionComponent = () => {
  const { user, fetchUser } = useAppContext();
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
        <SearchContainer>
          {isSearch && <StyleTextField id="standard-basic" label="Search" variant="standard" />}
        </SearchContainer>
        {user != null ? (
          <p>Logged</p>
        ) : (
          <Button variant="outlined" color="secondary" onClick={() => fetchUser('dummyUser', '123')}>
            Login
          </Button>
        )}
        {/* <Button variant="outlined" color="secondary" onClick={() => fetchUser('dummyUser', '123')}>
          Login
        </Button> */}
      </ToolbarContainer>
    </StyleBox>
  );
};
