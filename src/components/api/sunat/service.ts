import { ReniecResponse } from './types';

export const getDniData = async (dni: string): Promise<ReniecResponse> => {
    try {
        const response = await fetch(`http://localhost:3001/api/reniec/${dni}`);
        if (!response.ok) {
            throw new Error('Error consultando el backend');
        }
        return await response.json();
    } catch (error: any) {
        throw new Error(`Error fetching DNI data: ${error.message}`);
    }
};