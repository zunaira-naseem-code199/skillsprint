import API from "../api/axios";

const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get Settings
export const getSettings = async () => {
  const response = await API.get(
    "/settings",
    config()
  );

  return response.data;
};

// Update Settings
export const updateSettings = async (
  settingsData
) => {
  const response = await API.put(
    "/settings",
    settingsData,
    config()
  );

  return response.data;
};