import { Container, TextField } from '@mui/material';
import type { NextPage } from 'next';
import { Message } from '@components/ui/Message/Message';
import React from 'react';
import { useSession } from 'next-auth/react';

const MessagedUser: NextPage = () => {
  const { data } = useSession();

  const messageHistory = [
    {
      username: 'test',
      message: 'hello',
    },
    {
      username: 'dummyUser',
      message: 'banana',
    },
  ];

  function sendMessage(event) {
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    if (event.key === 'Enter') {
      sendMessage(event);
    }
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container sx={{ maxHeight: '75vh', overflowY: 'scroll' }}>
        {messageHistory.map((message) => (
          <Message
            username={message.username}
            message={message.message}
            isRight={message.username === data.user.username}
          />
        ))}
      </Container>
      <TextField variant="outlined" placeholder="Enter a message" onKeyDown={handleSubmit} />
    </Container>
  );
};

export default MessagedUser;
