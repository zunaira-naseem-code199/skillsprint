import axios from "axios";

const API_URL = "http://localhost:5000/api/profile";

const getToken = () => {
  return localStorage.getItem("token");
};

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get Profile
export const getProfile = async () => {
  const response = await axios.get(
    API_URL,
    config()
  );

  return response.data;
};

// Update Profile
export const updateProfile = async (
  profileData
) => {
  const response = await axios.put(
    API_URL,
    profileData,
    config()
  );

  return response.data;
};