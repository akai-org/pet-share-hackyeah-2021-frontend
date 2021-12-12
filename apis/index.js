import axios from 'axios';
import { useQuery } from 'react-query';

const send = async (url, method = 'get', data = {}, headers = {}) => {
  const result = await axios({ url, method, data, headers });
  return result.data;
};

export const getSometing = () => send('/api/user', 'post');

export const useUserData = ({ userId }) => useQuery(['user', userId], () => send(`/api/user/${userId}`),{enabled:!!userId});

export const useItems = () => useQuery([], ()=> send('/api/items'))
