import API from "../api/axios";

// Axios Config
const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get All Certificates
export const getCertificates = async () => {
  const response = await API.get("/certificates", config());
  return response.data;
};

// Create Certificate
export const createCertificate = async (certificateData) => {
  const response = await API.post(
    "/certificates",
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
  const response = await API.put(
    `/certificates/${id}`,
    certificateData,
    config()
  );

  return response.data;
};

// Delete Certificate
export const deleteCertificate = async (id) => {
  const response = await API.delete(
    `/certificates/${id}`,
    config()
  );

  return response.data;
};