import axios from "axios";

const API_URL = "http://localhost:5000/api/journals";

// Get Token
const getToken = () => {
  return localStorage.getItem("token");
};

// Axios Config
const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get All Journals
export const getJournals = async () => {
  const response = await axios.get(API_URL, config());
  return response.data;
};

// Create Journal
export const createJournal = async (journalData) => {
  const response = await axios.post(
    API_URL,
    journalData,
    config()
  );

  return response.data;
};

// Update Journal
export const updateJournal = async (
  id,
  journalData
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    journalData,
    config()
  );

  return response.data;
};

// Delete Journal
export const deleteJournal = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    config()
  );

  return response.data;
};