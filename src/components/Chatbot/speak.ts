// Utilidad para síntesis de voz en el navegador
// Utilidad para síntesis de voz con preferencia masculina y soporte para español, quechua y aimara
export function speakText(text: string, lang: string = 'es-ES') {
  if ('speechSynthesis' in window) {
    const synth = window.speechSynthesis;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    const voices = synth.getVoices();
    // Prioridad: Pablo > voz masculina en español > cualquier voz en español > cualquier voz
    const pabloVoice = voices.find(v => v.name.toLowerCase().includes('pablo'));
    const maleEsVoice = voices.find(v => v.lang.startsWith('es') && (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('hombre') || v.name.toLowerCase().includes('enrique') || v.name.toLowerCase().includes('carlos') || v.name.toLowerCase().includes('juan')));
    const esVoice = voices.find(v => v.lang.startsWith('es'));
    utterance.voice = pabloVoice || maleEsVoice || esVoice || voices[0];
    synth.speak(utterance);
  }
}
