import axios from "axios";
import type { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:3000,
    headers:{"Content-Type":"application/json"}
});
export default api;