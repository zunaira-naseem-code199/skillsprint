import axios from "axios";

const API_URL = "http://localhost:5000/api/certificates";

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

// Get All Certificates
export const getCertificates = async () => {
  const response = await axios.get(API_URL, config());
  return response.data;
};

// Create Certificate
export const createCertificate = async (certificateData) => {
  const response = await axios.post(
    API_URL,
    certificateData,
    config()
  );

  return response.data;
};

// Update Certificate
export const updateCertificate = async (
  id,
  certificateData
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    certificateData,
    config()
  );

  return response.data;
};

// Delete Certificate
export const deleteCertificate = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    config()
  );

  return response.data;
};