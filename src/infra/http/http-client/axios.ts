import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers['Authorization'] = '';
instance.defaults.timeout = 5000;

export default instance;
