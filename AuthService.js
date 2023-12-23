import axios from 'axios';

const POST = 'http://192.168.1.1:5000'; 

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${POST}/login`, { username, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  signup: async (userData) => {
    try {
      const response = await axios.post(`${POST}/signup`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;