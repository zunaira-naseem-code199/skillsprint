import axios from "axios";

const API_URL = "http://localhost:5000/api/dashboard";

const getToken = () => {
  return localStorage.getItem("token");
};

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getDashboard = async () => {
  const response = await axios.get(API_URL, config());

  return response.data;
};