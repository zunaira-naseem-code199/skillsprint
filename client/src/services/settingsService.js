import axios from "axios";

const API_URL = "http://localhost:5000/api/settings";

const getToken = () => {
  return localStorage.getItem("token");
};

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get Settings
export const getSettings = async () => {
  const response = await axios.get(
    API_URL,
    config()
  );

  return response.data;
};

// Update Settings
export const updateSettings = async (
  settingsData
) => {
  const response = await axios.put(
    API_URL,
    settingsData,
    config()
  );

  return response.data;
};