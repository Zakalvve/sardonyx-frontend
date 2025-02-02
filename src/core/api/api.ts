import axios from "axios";

const baseUrl = `https://localhost:7020/api/`;;

axios.defaults.baseURL = baseUrl;

const api = axios;

export default api;