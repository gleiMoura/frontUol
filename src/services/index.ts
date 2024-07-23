import axios from "axios";

const api = axios.create({
    baseURL: "https://apiuol.onrender.com"
})

export default api;
