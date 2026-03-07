import { create } from 'zustand';
import { api } from '../axios/axiosInitaition';

export const authentication = create((set) => ({
  dashBoard: null,
  loading: false,
  error: null,
  agents: [],
  agentDetails: null,
  smartContracts: [],

  registerUser: async (payload) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post('/auth/register', payload);

     

      if (!res || res.status < 200 || res.status >= 300) {
        alert('Registration failed please try again');
      }
         const { jwt, dashboard, email, name } = res.data;

      set({
        dashBoard: dashboard,
        user: { email, name },
        loading: false,
      });
     
      // Adjust this path to match your real API response
    } catch (err) {
     
      set({
        loading: false,
        error: err?.response?.data?.message ?? 'Failed to register user',
      });
    }
  },

  loginUser: async (payload) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post('/auth/login', payload);

      console.log('Login response:', res.status, res.data);

     if (!res || res.status < 200 || res.status >= 300) {
        alert('Login failed please try again');
      }
         const { jwt, dashboard, email, name } = res.data;

      set({
        dashBoard: dashboard,
        user: { email, name },
        loading: false,
      });
    
      // Adjust this path to match your real API response
    } catch (err) {
      set({
        loading: false,
        error: err?.response?.data?.message ?? 'Failed to login user',
      });
    }
  }
}));
