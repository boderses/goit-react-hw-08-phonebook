import axios from 'axios';

const client = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const fetchContacts = async () => {
  try {
    const response = await client.get('/contacts');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createContact = async data => {
  try {
    return await client.post(`/contacts`, { ...data });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteContact = async contactId => {
  try {
    return await client.delete(`/contacts/${contactId}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
