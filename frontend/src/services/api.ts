import axios from "axios";

const api = axios.create({
  baseURL: "https://acowale-backend-f8ie.onrender.com",
});

export default api;