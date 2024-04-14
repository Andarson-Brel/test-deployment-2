import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://test-deployment-wxap.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
