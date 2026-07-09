import axios from "axios";

const API_URL = "http://localhost:5000/api/goals";

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Axios config
const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get all goals
export const getGoals = async () => {
  const response = await axios.get(API_URL, config());
  return response.data;
};

// Create goal
export const createGoal = async (goalData) => {
  const response = await axios.post(API_URL, goalData, config());
  return response.data;
};

// Update goal
export const updateGoal = async (id, goalData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    goalData,
    config()
  );

  return response.data;
};

// Delete goal
export const deleteGoal = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    config()
  );

  return response.data;
};