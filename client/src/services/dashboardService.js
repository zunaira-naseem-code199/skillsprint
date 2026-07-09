import API from "../api/axios";

const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getDashboard = async () => {
  const response = await API.get("/dashboard", config());

  return response.data;
};