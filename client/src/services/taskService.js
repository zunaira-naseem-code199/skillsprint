import API from "../api/axios";

// Axios config
const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get all tasks
export const getTasks = async () => {
  const response = await API.get("/tasks", config());
  return response.data;
};

// Create task
export const createTask = async (taskData) => {
  const response = await API.post(
    "/tasks",
    taskData,
    config()
  );

  return response.data;
};

// Update task
export const updateTask = async (id, taskData) => {
  const response = await API.put(
    `/tasks/${id}`,
    taskData,
    config()
  );

  return response.data;
};

// Delete task
export const deleteTask = async (id) => {
  const response = await API.delete(
    `/tasks/${id}`,
    config()
  );

  return response.data;
};