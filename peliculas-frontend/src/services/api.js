import axios from "axios";

const api = axios.create({
  baseURL: "https://NOMBRE-DEL-BACKEND.onrender.com/api"
});

export default api;
