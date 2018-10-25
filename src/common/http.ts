import axios from 'axios';

/* Common HTTP client */
const http = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL + '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Api-Token': process.env.VUE_APP_API_TOKEN,
        'Api-Secret-Key': process.env.VUE_APP_API_SECRET_KEY,
    },
});

http.interceptors.response.use((response) => response.data);

export default http;
