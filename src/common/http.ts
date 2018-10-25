import axios from 'axios';

/* Common HTTP client */
export default axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL + '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Api-Token': process.env.VUE_APP_API_TOKEN,
        'Api-Secret-Key': process.env.VUE_APP_API_SECRET_KEY,
    },
});
