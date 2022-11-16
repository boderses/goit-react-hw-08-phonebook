import axios from 'axios';

const client = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = async data => {
  try {
    const res = await client.post(`/users/signup`, { ...data });
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logIn = async data => {
  try {
    const res = await client.post(`/users/login`, { ...data });
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logOut = async () => {
  try {
    const res = await client.post(`/users/logout`);
    clearAuthHeader();
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const refreshUser = async persistedToken => {
  try {
    setAuthHeader(persistedToken);
    const res = await client.get('/users/current');
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
