import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Typography } from '@mui/material';

const ImageWrapper = styled.div`
  width: 280px;
  height: 400px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled.a`
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

export const Organisation: FunctionComponent<Props> = ({ username, address, imageUrl, id }) => {
  return (
    <Link passHref href={`/user/${id}`}>
      <StyledBox>
        <ImageWrapper>
          {imageUrl ? <img src={imageUrl} alt="Organization logo" /> : <div>Brak zdjęcia</div>}
        </ImageWrapper>
        <Typography variant="h5">{username}</Typography>
        <Typography variant="h6">{address}&nbsp;</Typography>
      </StyledBox>
    </Link>
  );
};
