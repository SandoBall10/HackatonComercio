import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { speakText } from './speak';
import { useTranslation } from 'react-i18next';
import { consultarElectoralGemini } from '../api/sunat';   // ✅ YA ACTUALIZADO
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

  const getBotResponse = async (userMessage: string): 
    Promise<{ text: string; options?: string[]; action?: () => void }> => {

    const msg = userMessage.toLowerCase().trim();

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

    if (msg.includes('candidato') || msg.includes('ver candidatos')) {
      return {
        text: t('chatbot.respuestas.candidatos'),
        action: () => setTimeout(() => navigate('/candidatos'), 1000)
      };
    }

    if (msg.includes('partido') || msg.includes('ver partidos')) {
      return {
        text: t('chatbot.respuestas.partidos'),
        action: () => setTimeout(() => navigate('/partidos'), 1000)
      };
    }

    if (msg.includes('reniec') || msg.includes('dni') || msg.includes('consultar')) {
      return {
        text: t('chatbot.respuestas.reniec'),
        action: () => setTimeout(() => navigate('/reniec'), 1000)
      };
    }

    if (msg.includes('tutorial') || msg.includes('video')) {
      return {
        text: '🎥 ¡Perfecto! Te llevo al Tutorial.',
        action: () => setTimeout(() => navigate('/tutorial'), 1000)
      };
    }

    if (msg.includes('miembro') || msg.includes('mesa') || msg.includes('cronograma')) {
      return {
        text: '📋 Te mostraré la sección de Miembros de Mesa.',
        action: () => setTimeout(() => navigate('/miembros-mesa'), 1000)
      };
    }

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
        text: '❌ Lo siento, ocurrió un problema al procesar tu solicitud.',
        options: [
          'Tutorial de la página',
          'Ver Partidos',
          'Ver Candidatos',
          'Consultar RENIEC'
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
      addMessage('❌ Ocurrió un error, intenta nuevamente.', false);
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
    } catch {
      setIsTyping(false);
      addMessage('❌ Error inesperado.', false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
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
          >
            ×
          </button>
        </div>
      )}

      <button 
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
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
              >
                {voiceEnabled ? '🔊' : '🔇'}
              </button>
            </div>

            <button 
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
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
                  <div className="chatbot-message-bubble">{message.text}</div>

                  {message.options && (
                    <div className="chatbot-quick-options">
                      {message.options.map((option, idx) => (
                        <button 
                          key={idx}
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
                <div className="chatbot-message-bubble">
                  <div className="chatbot-typing">
                    <span></span><span></span><span></span>
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
              onChange={e => setInputValue(e.target.value)}
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
