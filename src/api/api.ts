import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3000/v1",
    timeout: 5000
})
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*"
export default api