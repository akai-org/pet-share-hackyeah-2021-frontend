import { Container, TextField } from '@mui/material';
import type { NextPage } from 'next';
import { Message } from '@components/ui/Message/Message';
import { useAppContext } from '@context/AppContext';
import React from 'react';

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
      username: 'test',
      message: 'hello',
    },
    {
      username: 'dummyUser',
      message: 'banana',
    },
  ];

  function sendMessage(event) {
    messageHistory.push({
      username: 'dummyUser',
      message: event.target.value,
    });
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
            isRight={message.username === user?.username}
            key={message.message}
          />
        ))}
      </Container>
      <TextField variant="outlined" placeholder="Enter a message" onKeyDown={(event) => handleSubmit(event)} />
    </Container>
  );
};

export default MessagedUser;
