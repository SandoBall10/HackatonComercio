import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const avatarUrl = '/avatar/avatar-chatbot.png';

  // Inicializar mensaje de bienvenida con traducción
  useEffect(() => {
    setMessages([{
      id: 1,
      text: t('chatbot.mensajeBienvenida'),
      isUser: false,
      options: [
        t('chatbot.verCandidatos'),
        t('chatbot.verPartidos'),
        t('chatbot.consultarReniec'),
        t('chatbot.cronograma'),
        i18n.language === 'es' ? '🌐 Cambiar idioma' : '🌐 Simi t\'ikray'
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

  // Mostrar notificaciones periódicas
  useEffect(() => {
    if (isOpen) return; // No mostrar si el chat está abierto

    const showRandomNotification = () => {
      const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
      setNotificationMessage(randomMessage);
      setShowNotification(true);

      // Ocultar después de 5 segundos
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    };

    // Primera notificación después de 10 segundos
    const initialTimer = setTimeout(showRandomNotification, 1000);

    // Notificaciones cada 30 segundos
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

  const getBotResponse = (userMessage: string): { text: string; options?: string[]; action?: () => void } => {
    const msg = userMessage.toLowerCase();

    // Cambio de idioma
    if (msg.includes('español') || msg.includes('castellano') || msg === 'es') {
      return {
        text: '¡Perfecto! He cambiado el idioma a Español 🇵🇪',
        action: () => {
          i18n.changeLanguage('es');
        }
      };
    }

    if (msg.includes('quechua') || msg.includes('runasimi') || msg === 'qu') {
      return {
        text: '¡Allinmi! Simita Quechuaman t\'ikrarqani 🏔️',
        action: () => {
          i18n.changeLanguage('qu');
        }
      };
    }

    if (msg.includes('idioma') || msg.includes('lengua') || msg.includes('cambiar') || msg.includes('simi') || msg.includes('t\'ikray')) {
      return {
        text: i18n.language === 'es' 
          ? '¿A qué idioma deseas cambiar?' 
          : '¿Mayqin simiman t\'ikrayta munankichu?',
        options: ['Español 🇵🇪', 'Quechua 🏔️']
      };
    }

    if (msg === 'español 🇵🇪') {
      return {
        text: '¡Perfecto! He cambiado el idioma a Español 🇵🇪',
        action: () => {
          i18n.changeLanguage('es');
        }
      };
    }

    if (msg === 'quechua 🏔️') {
      return {
        text: '¡Allinmi! Simita Quechuaman t\'ikrarqani 🏔️',
        action: () => {
          i18n.changeLanguage('qu');
        }
      };
    }

    if (msg.includes('candidato') || msg.includes('ver candidatos') || msg.includes('akllasqa')) {
      return {
        text: t('chatbot.respuestas.candidatos'),
        action: () => setTimeout(() => navigate('/candidatos'), 1000)
      };
    }

    if (msg.includes('partido') || msg.includes('partidos políticos') || msg.includes('partidu') || msg.includes('pulitiku')) {
      return {
        text: t('chatbot.respuestas.partidos'),
        action: () => setTimeout(() => navigate('/partidos'), 1000)
      };
    }

    if (msg.includes('reniec') || msg.includes('consultar') || msg.includes('dni') || msg.includes('tapukuy')) {
      return {
        text: t('chatbot.respuestas.reniec'),
        action: () => setTimeout(() => navigate('/reniec'), 1000)
      };
    }

    if (msg.includes('cronograma') || msg.includes('fecha') || msg.includes('calendario') || msg.includes('cuando') || msg.includes('pachakamay')) {
      return {
        text: t('chatbot.respuestas.cronogramaRespuesta'),
        action: () => setTimeout(() => navigate('/'), 1000)
      };
    }

    if (msg.includes('inicio') || msg.includes('home') || msg.includes('principal') || msg.includes('qallariy')) {
      return {
        text: t('chatbot.respuestas.inicio'),
        action: () => setTimeout(() => navigate('/'), 1000)
      };
    }

    if (msg.includes('ayuda') || msg.includes('help') || msg.includes('yanapay')) {
      return {
        text: t('chatbot.respuestas.ayuda'),
        options: [
          t('chatbot.verCandidatos'),
          t('chatbot.verPartidos'),
          t('chatbot.consultarReniec'),
          t('chatbot.cronograma'),
          i18n.language === 'es' ? '🌐 Cambiar idioma' : '🌐 Simi t\'ikray'
        ]
      };
    }

    if (msg.includes('hola') || msg.includes('buenos días') || msg.includes('buenas tardes') || msg.includes('napay')) {
      return {
        text: t('chatbot.respuestas.saludo'),
        options: [
          t('chatbot.verCandidatos'),
          t('chatbot.verPartidos'),
          t('chatbot.consultarReniec'),
          t('chatbot.cronograma'),
          i18n.language === 'es' ? '🌐 Cambiar idioma' : '🌐 Simi t\'ikray'
        ]
      };
    }

    if (msg.includes('gracias') || msg.includes('sulpayki')) {
      return {
        text: t('chatbot.respuestas.gracias'),
        options: [
          t('chatbot.verCandidatos'),
          t('chatbot.verPartidos'),
          t('chatbot.consultarReniec'),
          t('chatbot.respuestas.noGracias')
        ]
      };
    }

    // Respuesta por defecto
    return {
      text: t('chatbot.respuestas.default'),
      options: [
        t('chatbot.verCandidatos'),
        t('chatbot.verPartidos'),
        t('chatbot.consultarReniec'),
        t('chatbot.respuestas.verCronograma'),
        i18n.language === 'es' ? '🌐 Cambiar idioma' : '🌐 Simi t\'ikray'
      ]
    };
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Agregar mensaje del usuario
    addMessage(inputValue, true);
    setInputValue('');

    // Simular escritura del bot
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(inputValue);
      addMessage(response.text, false, response.options);
      if (response.action) {
        response.action();
      }
    }, 1000);
  };

  const handleQuickOption = (option: string) => {
    addMessage(option, true);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(option);
      addMessage(response.text, false, response.options);
      if (response.action) {
        response.action();
      }
    }, 800);
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
      {/* Notificación flotante */}
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

      {/* Botón flotante */}
      <button 
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir asistente virtual"
      >
        <img src={avatarUrl} alt="Asistente Virtual" />
      </button>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-avatar">
              <img src={avatarUrl} alt="Avatar" />
            </div>
            <div className="chatbot-header-info">
              <h3>Yachay</h3>
              <p>{t('chatbot.subtitulo')}</p>
            </div>
            <button 
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          {/* Mensajes */}
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

          {/* Input */}
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
