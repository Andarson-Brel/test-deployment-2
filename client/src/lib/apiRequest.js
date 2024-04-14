import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://test-deployment-2-krcx.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
