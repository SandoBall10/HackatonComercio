interface ReniecResponse {
    first_name: string;
    first_last_name: string;
    second_last_name: string;
    document_number: string;
}

interface GeminiResponse {
  success: boolean;
  output?: string;
  error?: string;
}

export type { ReniecResponse, GeminiResponse };