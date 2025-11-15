import { sunatClient } from './client';
import { DniResponse } from './types';

export const getDniData = async (dni: string): Promise<DniResponse> => {
    try {
        const response = await sunatClient.get(`/dni/${dni}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching DNI data: ${error}`);
    }
};