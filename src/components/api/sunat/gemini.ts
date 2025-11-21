const BACKEND_URL = 'https://backendnodejs-hackaton-production.up.railway.app';

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

// Función mejorada para consultas específicas del contexto electoral
export const consultarElectoralGemini = async (pregunta: string): Promise<string> => {
  const promptContexto = `Eres un asistente electoral especializado exclusivamente en las Elecciones Generales de Perú 2026.

REGLAS ESTRICTAS:
1. SOLO puedes responder sobre:
   - Candidatos presidenciales de las Elecciones 2026
   - Partidos políticos participantes en las Elecciones 2026
   - Proceso electoral peruano (cómo votar, fechas, requisitos, miembros de mesa)
   - Derechos y deberes ciudadanos en el proceso electoral
   - Historia política de Perú y presidentes históricos
   - Comparaciones entre presidentes o gobiernos peruanos
   - Análisis de propuestas de gobierno de candidatos 2026
   - Procedimientos de la ONPE, JNE y RENIEC

2. NO puedes responder sobre:
   - Temas no relacionados con política o elecciones
   - Entretenimiento, deportes, tecnología (excepto si es sobre voto electrónico)
   - Matemáticas, ciencias, programación (excepto si es sobre sistemas electorales)
   - Cualquier otro tema fuera del contexto electoral peruano

3. Si la pregunta NO está relacionada con estos temas, responde EXACTAMENTE:
   "Lo siento, solo puedo ayudarte con consultas sobre las Elecciones Generales 2026, candidatos presidenciales, proceso electoral peruano, historia política de Perú o presidentes históricos. ¿Tienes alguna pregunta sobre estos temas?"

4. Tus respuestas deben ser:
   - Claras y concisas (máximo 200 palabras)
   - Objetivas e imparciales
   - Basadas en hechos verificables
   - En español claro y accesible

PREGUNTA DEL USUARIO:
${pregunta}

RESPUESTA:`;
  
  return await consultarGemini(promptContexto);
};