import axios from 'axios';
// import { useQuery } from 'react-query';

export const send = async (url, method = 'get', data = {}, headers = {}) => {
  const result = await axios({
    baseURL: process.env.NEXT_PUBLIC_WEB_URL,
    url,
    method,
    data,
    headers,
  });
  return result.data;
};