// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/profile`);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return { name: "Default Name", email: "default@example.com" };
  }
};

// Additional API functions for other operations can be added here.
