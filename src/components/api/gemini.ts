// src/components/api/gemini.ts

export async function askGemini(prompt: string): Promise<string> {
  const apiKey = "fca30b296f16414ab31c92086a314d95";
  const url = "https://api.aimlapi.com/v1/chat/completions";

  const body = {
    model: "gpt-4o", // Puedes cambiar el modelo si lo deseas
    messages: [
      { role: "system", content: "Eres un asistente útil y amigable." },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
    max_tokens: 256,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Error al consultar AIML API");
  }

  const data = await response.json();
  // AIML API response: data.choices[0].message.content
  return (
    data?.choices?.[0]?.message?.content ||
    "No se pudo obtener respuesta de la IA."
  );
}
