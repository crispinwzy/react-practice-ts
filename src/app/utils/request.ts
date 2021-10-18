import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  timeout: 2000 // request timeout
});

export default service;
