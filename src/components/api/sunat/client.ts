import axios from 'axios';

const DECOLECTA_API_BASE_URL = 'https://api.decolecta.com/v1/reniec';

const decolectaClient = axios.create({
    baseURL: DECOLECTA_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`, // Debes agregar el token aquí
    },
});

export default decolectaClient;