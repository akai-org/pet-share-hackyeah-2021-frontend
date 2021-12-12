import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
// @ts-ignore
import styled from 'styled-components';
import Link from 'next/link';
import { Typography } from '@mui/material';

type Props = {
  user: { username: string; address: string; imageUrl: string, id: number };
};

const StyledBox = styled(Box)`
  img {
    width: 80vw;
    height: 80vw;
    padding: 20px;
  }
  h5 {
    font-weight: bold;
    color: var(--secondary);
    text-decoration: underline;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.2), 0px 1px 6px 0px rgba(0, 0, 0, 0.14),
    0px 1px 6px 0px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  cursor: pointer;
`;

export const Organisation: FunctionComponent<Props> = ({ user }) => {
  const { username, address, imageUrl } = user;

  return (
    <Link passHref href={`/user/${user.id}`}>
      <StyledBox>
        <img src={imageUrl} alt="Organization logo" />
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          {username}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {address}
        </Typography>
      </StyledBox>
    </Link>
  );
};
