import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { speakText } from './speak';
import { useTranslation } from 'react-i18next';
import { consultarElectoralGemini } from '../api/sunat';
import './Chatbot.css';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  options?: string[];
}

const Chatbot: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const avatarUrl = '/avatar/avatar-chatbot.png';

  useEffect(() => {
    setMessages([{
      id: 1,
      text: t('chatbot.mensajeBienvenida'),
      isUser: false,
      options: [
        'Tutorial de la página',
        t('chatbot.verPartidos'),
        t('chatbot.consultarReniec'),
        t('chatbot.cronograma'),
        i18n.language === 'es' ? '🌐 Cambiar idioma' : i18n.language === 'qu' ? '🌐 Simi t\'ikray' : '🌐 Aru mayjt\'aña'
      ]
    }]);
  }, [t, i18n.language]);

  const notificationMessages = [
    t('chatbot.notificaciones.ayuda'),
    t('chatbot.notificaciones.disponible'),
    t('chatbot.notificaciones.pregunta'),
    t('chatbot.notificaciones.guiar'),
    t('chatbot.notificaciones.candidatos'),
    t('chatbot.notificaciones.cronograma')
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) return;

    const showRandomNotification = () => {
      const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
      setNotificationMessage(randomMessage);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    };

    const initialTimer = setTimeout(showRandomNotification, 1000);
    const interval = setInterval(showRandomNotification, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isOpen]);

  const addMessage = (text: string, isUser: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isUser,
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getBotResponse = async (userMessage: string): Promise<{ text: string; options?: string[]; action?: () => void }> => {
    const msg = userMessage.toLowerCase().trim();

    // Cambio de idioma
    if (msg.includes('español') || msg.includes('castellano') || msg === 'es' || msg.includes('spanish')) {
      return {
        text: '¡Perfecto! He cambiado el idioma a Español 🇵🇪',
        action: () => i18n.changeLanguage('es')
      };
    }

    if (msg.includes('quechua') || msg.includes('runasimi') || msg === 'qu') {
      return {
        text: '¡Allinmi! Simita Quechuaman t\'ikrarqani 🏔️',
        action: () => i18n.changeLanguage('qu')
      };
    }

    if (msg.includes('aimara') || msg.includes('aymara') || msg.includes('jaqiaru') || msg === 'ay') {
      return {
        text: '¡Walikiwa! Aruxa Aimararu mayjt\'tawa 🌄',
        action: () => i18n.changeLanguage('ay')
      };
    }

    if (msg.includes('idioma') || msg.includes('lengua') || msg.includes('cambiar') || msg.includes('🌐')) {
      return {
        text: i18n.language === 'es' 
          ? '¿A qué idioma deseas cambiar?' 
          : i18n.language === 'qu'
          ? '¿Mayqin simiman t\'ikrayta munankichu?'
          : '¿Kawki aruru mayjt\'añ munaskta?',
        options: ['Español 🇵🇪', 'Quechua 🏔️', 'Aimara 🌄']
      };
    }

    // Navegación rápida
    if (msg.includes('candidato') || msg.includes('ver candidatos') || msg.includes('akllasqa')) {
      return {
        text: t('chatbot.respuestas.candidatos') || '¡Perfecto! Te llevaré a ver los candidatos presidenciales para las Elecciones 2026.',
        action: () => setTimeout(() => navigate('/candidatos'), 1000)
      };
    }

    if (msg.includes('partido') || msg.includes('partidos políticos') || msg.includes('partidu') || msg.includes('ver partidos')) {
      return {
        text: t('chatbot.respuestas.partidos') || '¡Excelente! Te mostraré todos los partidos políticos participantes en las Elecciones 2026.',
        action: () => setTimeout(() => navigate('/partidos'), 1000)
      };
    }

    if (msg.includes('reniec') || msg.includes('consultar') || msg.includes('dni') || msg.includes('donde voto')) {
      return {
        text: (t('chatbot.respuestas.reniec') || 'Te llevaré a la sección RENIEC donde puedes consultar tu información electoral.') + '\n\n💡 Puedes consultar:\n✓ Tu local de votación\n✓ Tu número de mesa\n✓ Dirección exacta\n✓ Mapa de ubicación',
        action: () => setTimeout(() => navigate('/reniec'), 1000)
      };
    }

    if (msg.includes('tutorial') || msg.includes('video') || msg.includes('aprend') || msg.includes('como funciona') || msg.includes('tutorial de la página')) {
      return {
        text: '🎥 ¡Perfecto! Te llevaré a la sección de Tutorial.\n\nAhí encontrarás:\n\n✓ Videos educativos sobre el proceso electoral\n✓ Instrucciones paso a paso para votar\n✓ Preguntas frecuentes (FAQ)\n✓ Guías interactivas\n\nPerfecto para aprender todo sobre las elecciones 2026.',
        action: () => setTimeout(() => navigate('/tutorial'), 1000)
      };
    }

    if (msg.includes('miembro') || msg.includes('mesa') || msg.includes('sorteo') || msg.includes('cronograma')) {
      return {
        text: '¡Te llevaré a la sección de Miembros de Mesa! 📋\n\nAhí encontrarás:\n\n✓ Cronograma del día electoral\n✓ Instrucciones paso a paso\n✓ Tus derechos y deberes\n✓ Capacitación disponible\n✓ Compensación económica S/ 120\n✓ Excusas válidas\n✓ Consecuencias por inasistencia',
        action: () => setTimeout(() => navigate('/miembros-mesa'), 1000)
      };
    }

    // Consultas complejas con Gemini
    try {
      setIsTyping(true);
      const respuestaGemini = await consultarElectoralGemini(userMessage);
      return {
        text: respuestaGemini,
        options: [
          'Ver Candidatos',
          'Ver Partidos',
          'Consultar RENIEC',
          'Ver Tutorial'
        ]
      };
    } catch (error) {
      console.error('Error consultando Gemini:', error);
      return {
        text: '❌ Lo siento, tuve un problema al procesar tu pregunta. ¿Podrías reformularla o elegir una opción del menú?',
        options: [
          'Tutorial de la página',
          'Ver Partidos',
          'Ver Candidatos',
          'Consultar RENIEC',
          'Ver Miembros de Mesa'
        ]
      };
    }
  };

  const handleVoiceToggle = () => {
    setVoiceEnabled(v => {
      const newValue = !v;
      if (!newValue && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return newValue;
    });
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    addMessage(inputValue, true);
    const userInput = inputValue;
    setInputValue('');
    setIsTyping(true);
    
    try {
      const response = await getBotResponse(userInput);
      setIsTyping(false);
      addMessage(response.text, false, response.options);
      
      if (voiceEnabled) {
        speakText(response.text, i18n.language === 'qu' ? 'qu-PE' : i18n.language === 'ay' ? 'ay-BO' : 'es-ES');
      }
      
      if (response.action) {
        response.action();
      }
    } catch (error) {
      setIsTyping(false);
      addMessage(
        '❌ Lo siento, ocurrió un error. Por favor intenta de nuevo.',
        false,
        ['Tutorial de la página', 'Ver Partidos', 'Ver Candidatos']
      );
    }
  };

  const handleQuickOption = async (option: string) => {
    addMessage(option, true);
    setIsTyping(true);
    
    try {
      const response = await getBotResponse(option);
      setIsTyping(false);
      addMessage(response.text, false, response.options);
      
      if (voiceEnabled) {
        speakText(response.text, i18n.language === 'qu' ? 'qu-PE' : i18n.language === 'ay' ? 'ay-BO' : 'es-ES');
      }
      
      if (response.action) {
        response.action();
      }
    } catch (error) {
      setIsTyping(false);
      addMessage(
        '❌ Lo siento, ocurrió un error. Por favor intenta de nuevo.',
        false
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleNotificationClick = () => {
    setShowNotification(false);
    setIsOpen(true);
  };

  return (
    <>
      {showNotification && !isOpen && (
        <div className="chatbot-notification" onClick={handleNotificationClick}>
          <div className="chatbot-notification-avatar">
            <img src={avatarUrl} alt="Avatar" />
          </div>
          <div className="chatbot-notification-content">
            <p className="chatbot-notification-title">{t('chatbot.titulo')}</p>
            <p className="chatbot-notification-message">{notificationMessage}</p>
          </div>
          <button
            className="chatbot-notification-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowNotification(false);
            }}
            aria-label="Cerrar notificación"
          >
            ×
          </button>
        </div>
      )}

      <button 
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Conversa con Yachay"
      >
        <img src={avatarUrl} alt="Yachay" />
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-avatar">
              <img src={avatarUrl} alt="Avatar" />
            </div>
            <div className="chatbot-header-info">
              <h3>Yachay</h3>
              <p>{t('chatbot.subtitulo')}</p>
            </div>
            <div className="chatbot-header-voice-toggle">
              <button
                className={"chatbot-voice-toggle-btn-icon" + (voiceEnabled ? " enabled" : " disabled")}
                onClick={handleVoiceToggle}
                title={voiceEnabled ? "Desactivar voz" : "Activar voz"}
                aria-label={voiceEnabled ? "Desactivar voz" : "Activar voz"}
              >
                {voiceEnabled ? (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" fill="#fff"/>
                    <path d="M5 15V9h4l5-4v14l-5-4H5z" fill="#2196f3"/>
                    <path d="M17.5 8.5a5 5 0 010 7" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M19.5 6a8 8 0 010 12" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" fill="#fff"/>
                    <path d="M5 15V9h4l5-4v14l-5-4H5z" fill="#888"/>
                    <path d="M17.5 8.5a5 5 0 010 7" stroke="#888" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M19.5 6a8 8 0 010 12" stroke="#888" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <line x1="7" y1="7" x2="17" y2="17" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </div>
            <button 
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map(message => (
              <div key={message.id} className={`chatbot-message ${message.isUser ? 'user' : ''}`}>
                {!message.isUser && (
                  <div className="chatbot-message-avatar">
                    <img src={avatarUrl} alt="Bot" />
                  </div>
                )}
                <div className="chatbot-message-content">
                  <div className="chatbot-message-bubble">
                    {message.text}
                  </div>
                  {message.options && (
                    <div className="chatbot-quick-options">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          className="chatbot-quick-option"
                          onClick={() => handleQuickOption(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="chatbot-message">
                <div className="chatbot-message-avatar">
                  <img src={avatarUrl} alt="Bot" />
                </div>
                <div className="chatbot-message-content">
                  <div className="chatbot-message-bubble">
                    <div className="chatbot-typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder={t('chatbot.placeholder')}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="chatbot-send-button"
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ''}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
