import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

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

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL, config());
  return response.data;
};

// Create task
export const createTask = async (taskData) => {
  const response = await axios.post(
    API_URL,
    taskData,
    config()
  );

  return response.data;
};

// Update task
export const updateTask = async (id, taskData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    taskData,
    config()
  );

  return response.data;
};

// Delete task
export const deleteTask = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    config()
  );

  return response.data;
};