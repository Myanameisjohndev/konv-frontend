import axios from 'axios';

const api = axios.create({
  baseURL: 'https://konv-backend-app.herokuapp.com',
});

export default api;
