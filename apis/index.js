import axios from 'axios';
import { useQuery } from 'react-query';

const send = async (url, method = 'get', data = {}, headers = {}) => {
  const result = await axios({ url, method, data, headers });
  return result.data;
};

export const getSometing = () => send('/api/user', 'post');

export const useItems = () => useQuery([], () => send('/api/items'))

export const useItem = ({ itemId }) => useQuery(['item', itemId], () => send(`/api/items/${ itemId }`), {enabled: !!itemId})

export const useOrganizations = () => useQuery(['organizations'], () => send('/api/organizations'))

export const useUserData = ({ userId }) => useQuery(['user', userId], () => send(`/api/user/${ userId }`));

export const postItem = ({ name, description, brandId, typeId, expirationDate, imageUrl }) => send('/api/items', 'post', { name, description, brandId, typeId, expirationDate, imageUrl });

export const useUserItems = ({ userId }) => useQuery(['user', userId], () => send(`/api/items/listing/user/${ userId }`));

export const useTypeItems = ({ typeId }) => useQuery(['type', typeId], () => send(`/api/items/type/${ typeId }`));

export const useBrandItems = ({ brandId }) => useQuery(['brand', brandId], () => send(`/api/items/type/${ brandId }`));
