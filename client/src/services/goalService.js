import API from "../api/axios";

// Axios config
const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get all goals
export const getGoals = async () => {
  const response = await API.get("/goals", config());
  return response.data;
};

// Create goal
export const createGoal = async (goalData) => {
  const response = await API.post(
    "/goals",
    goalData,
    config()
  );

  return response.data;
};

// Update goal
export const updateGoal = async (id, goalData) => {
  const response = await API.put(
    `/goals/${id}`,
    goalData,
    config()
  );

  return response.data;
};

// Delete goal
export const deleteGoal = async (id) => {
  const response = await API.delete(
    `/goals/${id}`,
    config()
  );

  return response.data;
};