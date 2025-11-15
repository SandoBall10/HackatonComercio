import axios from 'axios';

const SUNAT_API_BASE_URL = 'https://api.sunat.gob.pe/v1';

const sunatClient = axios.create({
    baseURL: SUNAT_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default sunatClient;