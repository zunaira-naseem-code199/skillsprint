import axios from "axios";

const API = axios.create({
  baseURL: "https://skillsprint-production-4d66.up.railway.app/api",
});

export default API;