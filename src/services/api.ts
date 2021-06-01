import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hackathon-backend-project.herokuapp.com'
});

export default api;
