import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  options?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '¡Hola! Soy tu asistente virtual para las Elecciones Perú 2026. ¿En qué puedo ayudarte hoy?',
      isUser: false,
      options: [
        'Ver candidatos',
        'Ver partidos políticos',
        'Consultar RENIEC',
        'Cronograma electoral'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const avatarUrl = '/avatar/avatar-chatbot.png'; // Asegúrate de guardar la imagen en public/

  const notificationMessages = [
    '¿Necesitas ayuda para encontrar algo?',
    'Estoy aquí para ayudarte 😊',
    '¿Tienes alguna pregunta sobre las elecciones?',
    'Puedo guiarte por la plataforma',
    '¿Buscas información de candidatos?',
    'Consulta el cronograma electoral conmigo'
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

    if (msg.includes('candidato') || msg.includes('ver candidatos')) {
      return {
        text: '¡Perfecto! Te llevaré a la sección de candidatos donde podrás ver información detallada de cada uno.',
        action: () => setTimeout(() => navigate('/candidatos'), 1000)
      };
    }

    if (msg.includes('partido') || msg.includes('partidos políticos')) {
      return {
        text: 'Te mostraré la lista de partidos políticos inscritos para las Elecciones 2026.',
        action: () => setTimeout(() => navigate('/partidos'), 1000)
      };
    }

    if (msg.includes('reniec') || msg.includes('consultar') || msg.includes('dni')) {
      return {
        text: 'Te llevaré al módulo de consulta RENIEC donde podrás verificar información de ciudadanos.',
        action: () => setTimeout(() => navigate('/reniec'), 1000)
      };
    }

    if (msg.includes('cronograma') || msg.includes('fecha') || msg.includes('calendario') || msg.includes('cuando')) {
      return {
        text: 'El cronograma electoral completo está en la página de inicio. Las elecciones serán el 12 de abril de 2026.',
        action: () => setTimeout(() => navigate('/'), 1000)
      };
    }

    if (msg.includes('inicio') || msg.includes('home') || msg.includes('principal')) {
      return {
        text: 'Te llevaré a la página de inicio.',
        action: () => setTimeout(() => navigate('/'), 1000)
      };
    }

    if (msg.includes('ayuda') || msg.includes('help')) {
      return {
        text: 'Puedo ayudarte con lo siguiente:',
        options: [
          'Ver candidatos',
          'Ver partidos políticos',
          'Consultar RENIEC',
          'Cronograma electoral'
        ]
      };
    }

    if (msg.includes('hola') || msg.includes('buenos días') || msg.includes('buenas tardes')) {
      return {
        text: '¡Hola! ¿En qué puedo ayudarte hoy?',
        options: [
          'Ver candidatos',
          'Ver partidos políticos',
          'Consultar RENIEC',
          'Cronograma electoral'
        ]
      };
    }

    if (msg.includes('gracias')) {
      return {
        text: '¡De nada! ¿Hay algo más en lo que pueda ayudarte?',
        options: [
          'Ver candidatos',
          'Ver partidos políticos',
          'Consultar RENIEC',
          'No, gracias'
        ]
      };
    }

    // Respuesta por defecto
    return {
      text: 'Puedo ayudarte a navegar por la plataforma. ¿Qué te gustaría hacer?',
      options: [
        'Ver candidatos',
        'Ver partidos políticos',
        'Consultar RENIEC',
        'Ver cronograma'
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
            <p className="chatbot-notification-title">Asistente Virtual</p>
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
              <h3>Asistente Virtual</h3>
              <p>Siempre disponible para ayudarte</p>
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
              placeholder="Escribe tu mensaje..."
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
