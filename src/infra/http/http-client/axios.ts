import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

instance.defaults.headers['Authorization'] = '';
instance.defaults.timeout = 5000;

export default instance;
