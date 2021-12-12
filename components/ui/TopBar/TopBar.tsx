import { FunctionComponent, useState } from 'react';
import { MdFavoriteBorder, MdSearch } from 'react-icons/md';
import { IconButton, TextField, Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const StyleBox = styled(Box)`
  flex-grow: 1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.a`
  width: 50px;
  height: 50px;
  display: block;
  overflow: hidden;
  padding: 0;
  border: 2px solid black;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
`;

const StyleTextField = styled(TextField)`
  width: 80%;
  margin: 0 10% 0 10%;
`;

export const Topbar: FunctionComponent = () => {
  const { data } = useSession();
  const [isSearch, setSearch] = useState(false);
  const router = useRouter();
  console.log(`data`, data);
  return (
    <StyleBox>
      <ToolbarContainer color="regular">
        <div>
          <IconButton
            onClick={() => {
              router.push('/favorites');
            }}
          >
            <MdFavoriteBorder size={30} color="var(--secondary)" />
          </IconButton>
          <IconButton
            onClick={() => {
              setSearch((v) => !v);
            }}
          >
            <MdSearch size={30} color="var(--secondary)" />
          </IconButton>
        </div>
        <div>
          <Link href="/">
            <a href="/">
              <Image src="/resources/favicon.png" width={50} height={50} />
            </a>
          </Link>
        </div>
        <div>
          {data ? (
            <Link href="/profile" passHref>
              <Avatar>
                <Image src={data.user.avatarUrl} width={50} height={50} />
              </Avatar>
            </Link>
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                signIn('google');
              }}
            >
              Login
            </Button>
          )}
        </div>
      </ToolbarContainer>
      {isSearch && <StyleTextField id="standard-basic" label="Search" variant="standard" />}
    </StyleBox>
  );
};
