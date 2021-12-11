import { Container } from '@mui/material';
import { FunctionComponent } from 'react';

type Props = {
  username: string;
  message: string;
  isRight: boolean;
};

export const Message: FunctionComponent<Props> = ({ username, message, isRight }) => (
  <Container>
    <h4 style={isRight ? { textAlign: 'end' } : {}}>{username}</h4>
    <p style={isRight ? { textAlign: 'end' } : {}}>{message}</p>
  </Container>
);
