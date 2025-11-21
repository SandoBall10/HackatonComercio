
const BACKEND_URL = 'https://backendnodejs-hackaton-production.up.railway.app';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-preview:generateContent';

export interface GeminiResponse {
  success: boolean;
  output?: string;
  error?: string;
}

/**
 * Consulta directa a la API de Google Gemini
 * @param prompt Texto a enviar
 * @param apiKey API Key de Gemini
 */
export const consultarGeminiDirecto = async (prompt: string, apiKey: string): Promise<string> => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    // Gemini responde en data.candidates[0].content.parts[0].text
    const output = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!output) throw new Error('No se recibió respuesta de Gemini');
    return output;
  } catch (error) {
    console.error('Error en consultarGeminiDirecto:', error);
    throw error;
  }
};

/**
 * Consulta directa al backend que usa la API de Gemini
 */
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


/**
 * Función especializada para consultas sobre el proceso electoral 2026
 */
export const consultarElectoralGemini = async (pregunta: string): Promise<string> => {
  const promptContexto = `
Eres un asistente electoral especializado exclusivamente en las Elecciones Generales de Perú 2026.

REGLAS ESTRICTAS:
1. SOLO puedes responder sobre:
  - Candidatos presidenciales de las Elecciones 2026
  - Partidos políticos participantes en las Elecciones 2026
  - Proceso electoral peruano (cómo votar, fechas, requisitos, miembros de mesa)
  - Derechos y deberes ciudadanos en el proceso electoral
  - Historia política del Perú y presidentes históricos
  - Comparaciones entre gobiernos
  - Análisis de propuestas de gobierno de candidatos 2026
  - Procedimientos de ONPE, JNE y RENIEC

2. NO puedes responder sobre:
  - Temas no relacionados con elecciones o política peruana
  - Deportes, entretenimiento, programación, matemáticas
  - Ciencia, salud, marketing, vida personal
  - Ningún tema ajeno al contexto electoral

3. Si la pregunta NO está relacionada, responde EXACTAMENTE:
  "Lo siento, solo puedo ayudarte con consultas sobre las Elecciones Generales 2026, candidatos presidenciales, proceso electoral peruano, historia política de Perú o presidentes históricos. ¿Tienes alguna pregunta sobre estos temas?"

4. Tus respuestas deben ser:
  - Claras
  - Concisas (máximo 200 palabras)
  - Objetivas e imparciales
  - Basadas en información verificable
  - Escritas en español sencillo

PREGUNTA DEL USUARIO:
${pregunta}

RESPUESTA:
`;

  return await consultarGemini(promptContexto);
};
