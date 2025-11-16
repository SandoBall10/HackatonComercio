import { ReniecResponse } from './types';
const API_URL = "https://backendnodejs-hackaton-production.up.railway.app";
export const getDniData = async (dni: string): Promise<ReniecResponse> => {
    try {
        const response = await fetch(`${API_URL}/api/reniec/${dni}`);
        if (!response.ok) {
            throw new Error('Error consultando el backend');
        }
        return await response.json();
    } catch (error: any) {
        throw new Error(`Error fetching DNI data: ${error.message}`);
    }
};