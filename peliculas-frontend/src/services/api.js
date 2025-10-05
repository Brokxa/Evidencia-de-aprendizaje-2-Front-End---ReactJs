import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://evidencia-de-aprendizaje-2-front-end-r8rk.onrender.com/api"
    : "http://localhost:3000/api";

const api = axios.create({
  baseURL,
});

export default api;