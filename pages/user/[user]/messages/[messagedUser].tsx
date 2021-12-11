import { Container } from '@mui/material';
import type { NextPage } from 'next';
import { Message } from '@components/ui/Message/Message';
import { useAppContext } from '@context/AppContext';

const MessagedUser: NextPage = () => {
  const { user } = useAppContext();

  const messageHistory = [
    {
      username: 'test',
      message: 'hello',
    },
    {
      username: 'dummyUser',
      message: 'banana',
    },
    {
      username: 'test',
      message: 'hello',
    },
    {
      username: 'dummyUser',
      message: 'banana',
    },
    {
      username: 'dummyUser',
      message: 'banana',
    },
  ];

  return (
    <Container>
      {messageHistory.map((message) => (
        <Message username={message.username} message={message.message} isRight={message.username === user.username} />
      ))}
    </Container>
  );
};

export default MessagedUser;
