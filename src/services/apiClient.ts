import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
});

export default apiClient;
