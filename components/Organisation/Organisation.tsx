import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Typography } from '@mui/material';

const ImageWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledBox = styled.a`
  overflow: hidden;
  h5 {
    font-weight: bold;
    color: var(--secondary);
    text-decoration: underline;
  }
  height: 500px;
  width: min(100%, 350px);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.2), 0px 1px 6px 0px rgba(0, 0, 0, 0.14),
    0px 1px 6px 0px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  cursor: pointer;
`;

export const Organisation = ({ username, address, avatarUrl, id }: any) => {
  return (
    <Link passHref href={`/user/${id}`}>
      <StyledBox>
        <ImageWrapper>
          {avatarUrl ? <img src={avatarUrl} alt="Organization logo" /> : <div>Brak zdjęcia</div>}
        </ImageWrapper>
        <br />
        <Typography variant="h5">{username}</Typography>
        <Typography variant="h6">{address}&nbsp;</Typography>
      </StyledBox>
    </Link>
  );
};
