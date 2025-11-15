interface SunatResponse {
    success: boolean;
    data?: {
        nombre: string;
        apellidoPaterno: string;
        apellidoMaterno: string;
        dni: string;
    };
    error?: {
        code: string;
        message: string;
    };
}

export type { SunatResponse };