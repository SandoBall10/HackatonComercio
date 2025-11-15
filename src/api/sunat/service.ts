import sunatClient from './client';
import { SunatResponse } from './types';

export const getDniData = async (dni: string): Promise<SunatResponse> => {
    try {
        const response = await sunatClient.get(`/dni/${dni}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching DNI data: ${error}`);
    }
};