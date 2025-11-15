import decolectaClient from './client';
import { ReniecResponse } from './types';

export const getDniData = async (dni: string): Promise<ReniecResponse> => {
    try {
        const response = await decolectaClient.get(`/dni`, {
            params: { numero: dni },
            headers: {
                'Authorization': `Bearer TU_TOKEN_AQUI`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching DNI data: ${error.message}`);
    }
};