import { create } from 'zustand';
import { api } from '../axios/axiosInitaition';

export const authentication = create((set) => ({
  dashBoard: null,
  loading: false,
  error: null,
  agents: [],
  agentDetails: null,
  smartContracts: [],
  VerificationData: [],
  VulnerabilityData: [],
  labelData: [],

  registerUser: async (payload) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post('/auth/register', payload);

      console.log('Registration response:', res.status, res.data);

      if (!res || res.status < 200 || res.status >= 300) {
        console.log('Registration failed');
      }
         const { jwt, dashboard, email, name } = res.data;

      set({
        dashBoard: dashboard,
        token: jwt,
        user: { email, name },
        loading: false,
      });
      console.log('User registered successfully, dashboard data:', dashboard);
      // Adjust this path to match your real API response
      const dashBoard = res.data?.data?.dashBoard ?? res.data?.dashBoard ?? null;

      
      
    } catch (err) {
      console.error('registerUser error:', err);
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

      const dashBoard = res.data?.data?.dashBoard ?? res.data?.dashBoard ?? null;

      set({ dashBoard, loading: false });
    } catch (err) {
      console.error('loginUser error:', err);
      set({
        loading: false,
        error: err?.response?.data?.message ?? 'Failed to login user',
      });
    }
  },
  setVerificationData: (data) => set({ VerificationData: data }),
  setVulnerabilityData: (data) => set({ VulnerabilityData: data }),
  setLabelData: (data) => set({ labelData: data }),
}));
