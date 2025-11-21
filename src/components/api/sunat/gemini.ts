const BACKEND_URL = 'https://backendnodejs-hackaton-production.up.railway.app'; // URL de Railway

export interface GeminiResponse {
  success: boolean;
  output?: string;
  error?: string;
}

export const consultarGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/gemini`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data: GeminiResponse = await response.json();

    if (!data.success || !data.output) {
      throw new Error(data.error || 'Error al consultar Gemini');
    }

    return data.output;
  } catch (error) {
    console.error('Error en consultarGemini:', error);
    throw error;
  }
};

// Función para consultas específicas del contexto electoral
export const consultarElectoralGemini = async (pregunta: string): Promise<string> => {
  const promptContexto = `Eres un asistente electoral experto en Perú. Responde de manera clara, concisa y precisa la siguiente pregunta sobre el proceso electoral peruano:\n\n${pregunta}`;
  
  return await consultarGemini(promptContexto);
};