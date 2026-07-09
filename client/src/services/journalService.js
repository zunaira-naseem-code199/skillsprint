import API from "../api/axios";

// Axios Config
const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get All Journals
export const getJournals = async () => {
  const response = await API.get("/journals", config());
  return response.data;
};

// Create Journal
export const createJournal = async (journalData) => {
  const response = await API.post(
    "/journals",
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
  const response = await API.put(
    `/journals/${id}`,
    journalData,
    config()
  );

  return response.data;
};

// Delete Journal
export const deleteJournal = async (id) => {
  const response = await API.delete(
    `/journals/${id}`,
    config()
  );

  return response.data;
};