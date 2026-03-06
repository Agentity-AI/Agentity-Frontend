// api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://agentity-backend.onrender.com', 
  timeout: 10000,
});
