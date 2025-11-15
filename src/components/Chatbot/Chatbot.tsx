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

    // ==================== CAMBIO DE IDIOMA ====================
    if (msg.includes('español') || msg.includes('castellano') || msg === 'es') {
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
        action: () => i18n.changeLanguage('es')
      };
    }

    if (msg === 'quechua 🏔️') {
      return {
        text: '¡Allinmi! Simita Quechuaman t\'ikrarqani 🏔️',
        action: () => i18n.changeLanguage('qu')
      };
    }

    // ==================== CANDIDATOS ====================
    if (msg.includes('candidato') || msg.includes('ver candidatos') || msg.includes('akllasqa') || 
        msg.includes('presidente') || msg.includes('umalliq') || msg.includes('postulante')) {
      return {
        text: t('chatbot.respuestas.candidatos'),
        action: () => setTimeout(() => navigate('/candidatos'), 1000)
      };
    }

    // ==================== PARTIDOS POLÍTICOS ====================
    if (msg.includes('partido') || msg.includes('partidos políticos') || msg.includes('partidu') || 
        msg.includes('pulitiku') || msg.includes('organizacion') || msg.includes('lista')) {
      return {
        text: t('chatbot.respuestas.partidos'),
        action: () => setTimeout(() => navigate('/partidos'), 1000)
      };
    }

    // ==================== MIEMBROS DE MESA ====================
    if (msg.includes('miembro') || msg.includes('mesa') || msg.includes('miembru') || 
        msg.includes('sorteo') || msg.includes('designado') || msg.includes('seleccionado') ||
        msg.includes('capacitacion') || msg.includes('yachachikuy') || msg.includes('instrucciones')) {
      return {
        text: i18n.language === 'es'
          ? '¡Te llevaré a la sección de Miembros de Mesa! Ahí encontrarás:\n\n✓ Cronograma del día\n✓ Instrucciones paso a paso\n✓ Tus derechos y deberes\n✓ Capacitación disponible\n✓ Compensación económica'
          : '¡Mesa Miembrukunapa sekciónman pusasqayki! Chaypi tarikunki:\n\n✓ P\'unchaw pachakamay\n✓ Yachachiy sapa llamk\'ay\n✓ Derechoykikuna ruwanaykikunapas\n✓ Yachachikuy kachkan\n✓ Qullqi yanapakuy',
        action: () => setTimeout(() => navigate('/miembros-mesa'), 1000)
      };
    }

    // ==================== RENIEC / CONSULTAS ====================
    if (msg.includes('reniec') || msg.includes('consultar') || msg.includes('dni') || 
        msg.includes('tapukuy') || msg.includes('verificar') || msg.includes('documento') ||
        msg.includes('identidad') || msg.includes('buscar')) {
      return {
        text: t('chatbot.respuestas.reniec'),
        action: () => setTimeout(() => navigate('/reniec'), 1000)
      };
    }

    // ==================== CRONOGRAMA / FECHAS ====================
    if (msg.includes('cronograma') || msg.includes('fecha') || msg.includes('calendario') || 
        msg.includes('cuando') || msg.includes('pachakamay') || msg.includes('dia') ||
        msg.includes('elecciones') || msg.includes('akllana') || msg.includes('abril') ||
        msg.includes('timeline') || msg.includes('tiempo')) {
      return {
        text: t('chatbot.respuestas.cronogramaRespuesta'),
        options: [t('chatbot.respuestas.verCronograma'), 'Ver Miembros de Mesa', t('chatbot.verPartidos')],
        action: () => setTimeout(() => navigate('/'), 1000)
      };
    }

    // ==================== VOTO / VOTACIÓN ====================
    if (msg.includes('vot') || msg.includes('sufrag') || msg.includes('akll') ||
        msg.includes('elegir') || msg.includes('como votar') || msg.includes('donde votar') ||
        msg.includes('local') || msg.includes('mesa electoral')) {
      return {
        text: i18n.language === 'es'
          ? '📍 Para votar necesitas:\n\n1. Tener tu DNI vigente\n2. Conocer tu local de votación (consulta en RENIEC)\n3. Ir el 12 de abril de 2026\n4. Horario: 8:00 AM - 4:00 PM\n\n¿Quieres consultar tu local de votación?'
          : '📍 Akllanapaqqa necesitankichu:\n\n1. DNI allin kachkan\n2. Yachay akllana wasiykita (RENIEC tapukuy)\n3. Riy 12 abril 2026pi\n4. Pacha: 8:00 AM - 4:00 PM\n\n¿Akllana wasiykita tapukuyta munankichu?',
        options: [t('chatbot.consultarReniec'), 'Ver Miembros de Mesa', t('chatbot.verCandidatos')]
      };
    }

    // ==================== PLAN DE GOBIERNO ====================
    if (msg.includes('plan') || msg.includes('propuesta') || msg.includes('gobierno') ||
        msg.includes('yuyay') || msg.includes('kamachiy') || msg.includes('programa')) {
      return {
        text: i18n.language === 'es'
          ? '📋 Para ver los planes de gobierno:\n\n1. Ve a la sección de Candidatos\n2. Selecciona un partido\n3. Revisa la pestaña "Plan de Gobierno"\n\n¿Te llevo a ver los candidatos?'
          : '📋 Kamachiy yuyaykunata qhawanapaq:\n\n1. Riy Akllasqakuna sekciónman\n2. Akllakuy huk partiduta\n3. Qhaway "Kamachiy Yuyay" pestañata\n\n¿Akllasqakunata qhawaman pusasqayki?',
        options: [t('chatbot.verCandidatos'), t('chatbot.verPartidos')]
      };
    }

    // ==================== REQUISITOS / DOCUMENTOS ====================
    if (msg.includes('requisito') || msg.includes('documento') || msg.includes('necesito') ||
        msg.includes('llevar') || msg.includes('papeles') || msg.includes('tramite')) {
      return {
        text: i18n.language === 'es'
          ? '📄 Requisitos para votar:\n\n✓ DNI original vigente\n✓ Ser mayor de 18 años\n✓ No tener impedimentos legales\n\n📋 Si eres miembro de mesa, además:\n✓ Presentarte a las 6:00 AM\n✓ Llevar tu designación (opcional)\n\n¿Necesitas más información?'
          : '📄 Akllanapaq requisitukuna:\n\n✓ DNI original allin kachkan\n✓ 18 watasniyuq kay\n✓ Mana impedimentu legalkuna\n\n📋 Sichus mesa miembruchu kanki:\n✓ Chayamuy 6:00 AM nisqapi\n✓ Apay designaciónniykita (opcional)\n\n¿Aswan willakuyta necesitankichu?',
        options: ['Ver Miembros de Mesa', t('chatbot.consultarReniec'), t('chatbot.verCandidatos')]
      };
    }

    // ==================== UBICACIÓN / LOCAL ====================
    if (msg.includes('donde') || msg.includes('ubica') || msg.includes('direccion') ||
        msg.includes('lugar') || msg.includes('maypi') || msg.includes('cheqa') ||
        msg.includes('local')) {
      return {
        text: i18n.language === 'es'
          ? '📍 Para saber dónde votas:\n\n1. Consulta en RENIEC con tu DNI\n2. Te mostrará tu local y mesa\n\n¿Te llevo a la consulta RENIEC?'
          : '📍 Yachanaykipaq maypichus akllanki:\n\n1. RENIEC tapukuy DNIykiwan\n2. Rikuchisunki wasiykita mesaykitapas\n\n¿RENIEC tapukuyman pusasqayki?',
        options: [t('chatbot.consultarReniec'), 'Ver Miembros de Mesa']
      };
    }

    // ==================== COMPENSACIÓN / PAGO ====================
    if (msg.includes('compensa') || msg.includes('pago') || msg.includes('dinero') ||
        msg.includes('sueldo') || msg.includes('qullqi') || msg.includes('cuanto') ||
        msg.includes('cobrar') || msg.includes('plata')) {
      return {
        text: i18n.language === 'es'
          ? '💰 Compensación para miembros de mesa:\n\n✓ Monto: S/ 120.00 soles\n✓ Se paga después de las elecciones\n✓ Incluye refrigerio y almuerzo\n\n¿Quieres ver más información sobre miembros de mesa?'
          : '💰 Mesa miembrukunapaq yanapakuy:\n\n✓ Qullqi: S/ 120.00 sulikuna\n✓ Qunakun akllanakunapa qhipanpi\n✓ Mikhuy almuerzo ima kachkan\n\n¿Mesa miembrukunamanta aswan willakuyta qhawayta munankichu?',
        options: ['Ver Miembros de Mesa', 'Ver derechos y deberes', t('chatbot.respuestas.noGracias')]
      };
    }

    // ==================== HORARIO ====================
    if (msg.includes('horario') || msg.includes('hora') || msg.includes('tiempo') ||
        msg.includes('abre') || msg.includes('cierra') || msg.includes('pacha')) {
      return {
        text: i18n.language === 'es'
          ? '⏰ Horarios importantes:\n\n🗳️ Votación: 8:00 AM - 4:00 PM\n📋 Miembros de mesa: 6:00 AM - 7:00 PM\n\n✓ Instalación de mesa: 7:00 AM\n✓ Cierre y conteo: 4:00 PM - 7:00 PM\n\n¿Necesitas el cronograma completo?'
          : '⏰ Hatun horakuna:\n\n🗳️ Akllana: 8:00 AM - 4:00 PM\n📋 Mesa miembrukuna: 6:00 AM - 7:00 PM\n\n✓ Mesapa churay: 7:00 AM\n✓ Wichq\'ay yupay: 4:00 PM - 7:00 PM\n\n¿Hunt\'a pachakamaypi necesitankichu?',
        options: ['Ver Miembros de Mesa', t('chatbot.respuestas.verCronograma')]
      };
    }

    // ==================== AYUDA / SOPORTE ====================
    if (msg.includes('ayuda') || msg.includes('help') || msg.includes('yanapay') ||
        msg.includes('apoyo') || msg.includes('asistencia') || msg.includes('soporte')) {
      return {
        text: t('chatbot.respuestas.ayuda'),
        options: [
          t('chatbot.verCandidatos'),
          t('chatbot.verPartidos'),
          'Ver Miembros de Mesa',
          t('chatbot.consultarReniec'),
          t('chatbot.cronograma')
        ]
      };
    }

    // ==================== SALUDOS ====================
    if (msg.includes('hola') || msg.includes('buenos días') || msg.includes('buenas tardes') || 
        msg.includes('napay') || msg.includes('buenas noches') || msg.includes('hey') ||
        msg.includes('saludos')) {
      return {
        text: t('chatbot.respuestas.saludo'),
        options: [
          t('chatbot.verCandidatos'),
          t('chatbot.verPartidos'),
          'Ver Miembros de Mesa',
          t('chatbot.consultarReniec')
        ]
      };
    }

    // ==================== DESPEDIDAS / AGRADECIMIENTOS ====================
    if (msg.includes('gracias') || msg.includes('sulpayki') || msg.includes('adiós') ||
        msg.includes('chau') || msg.includes('hasta luego') || msg.includes('bye')) {
      return {
        text: t('chatbot.respuestas.gracias'),
        options: [
          t('chatbot.verCandidatos'),
          t('chatbot.verPartidos'),
          'Ver Miembros de Mesa',
          t('chatbot.respuestas.noGracias')
        ]
      };
    }

    // ==================== INICIO / PÁGINA PRINCIPAL ====================
    if (msg.includes('inicio') || msg.includes('home') || msg.includes('principal') || 
        msg.includes('qallariy') || msg.includes('menu') || msg.includes('portada')) {
      return {
        text: t('chatbot.respuestas.inicio'),
        action: () => setTimeout(() => navigate('/'), 1000)
      };
    }

    // ==================== RESPUESTA POR DEFECTO ====================
    return {
      text: t('chatbot.respuestas.default'),
      options: [
        t('chatbot.verCandidatos'),
        t('chatbot.verPartidos'),
        'Ver Miembros de Mesa',
        t('chatbot.consultarReniec'),
        t('chatbot.respuestas.verCronograma')
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
              <h3>{t('chatbot.titulo')}</h3>
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
