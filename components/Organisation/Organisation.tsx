import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
// @ts-ignore
import styled from 'styled-components';
import Link from 'next/link';

type Props = {
  user: { username: string; address: string };
};

const StyledBox = styled(Box)`
  padding: 1.5em 2em 1em;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #bababa;
  min-height: 10em;
  box-shadow: 0 0 4px 4px #ccc;
  border-radius: 6px;
`;

export const Organisation: FunctionComponent<Props> = ({ user }) => {
  const { username, address } = user;

  return (
    <Link passHref href={`/user/${username}`}>
      <StyledBox>
        <h1>{username}</h1>
        <h2>{address}</h2>
      </StyledBox>
    </Link>
  );
};
