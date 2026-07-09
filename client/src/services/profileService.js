import API from "../api/axios";

const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get Profile
export const getProfile = async () => {
  const response = await API.get(
    "/profile",
    config()
  );

  return response.data;
};

// Update Profile
export const updateProfile = async (
  profileData
) => {
  const response = await API.put(
    "/profile",
    profileData,
    config()
  );

  return response.data;
};