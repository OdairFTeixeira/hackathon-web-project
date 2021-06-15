import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hackathon-backend-project.herokuapp.com',
  responseType: 'json'
});

export default api;
