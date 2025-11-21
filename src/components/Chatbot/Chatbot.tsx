import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { speakText } from './speak';
import { useTranslation } from 'react-i18next';
import { consultarElectoralGemini } from '../api/sunat/gemini';
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
    // Opciones rápidas multilingües
    const quickOptions = [
      i18n.language === 'es' ? '¿Me enseñas la página?' : i18n.language === 'qu' ? '¿Yachachiwanki plataformata?' : '¿Yatichäwimawa uka página?',
      i18n.language === 'es' ? 'Muéstrame los partidos' : i18n.language === 'qu' ? 'Partidokunata qhawachiy' : 'Partidunakaru uñachtʼayita',
      i18n.language === 'es' ? '¿Dónde consulto mi RENIEC?' : i18n.language === 'qu' ? 'RENIECpi maypitaq tapukuni?' : 'RENIEC jisktʼañataki kawkinkiti?',
      i18n.language === 'es' ? 'Quiero ver candidatos' : i18n.language === 'qu' ? 'Akllasqakunata rikusha munani' : 'Ajllitanakaru uñjañ munta',
      i18n.language === 'es' ? '¿Cuál es el cronograma?' : i18n.language === 'qu' ? 'Imaynataq pachakamay?' : 'Ajlliri pachaxa kunjamsa?',
      i18n.language === 'es' ? '¿Cómo se vota?' : i18n.language === 'qu' ? 'Imayna votayta munanki?' : 'Kunjamsa ajlliriñ muni?',
      i18n.language === 'es' ? '¿Tienes preguntas frecuentes?' : i18n.language === 'qu' ? 'Tapukuykuna sapa kuti kachkankichu?' : 'Jisktʼawinaka sapa kuti utjiti?',
      i18n.language === 'es' ? 'Quiero cambiar el idioma' : i18n.language === 'qu' ? 'Simita tʼikrayta munani' : 'Aru mayjtʼañ munta',
    ];
    setMessages([{
      id: 1,
      text: t('chatbot.mensajeBienvenida'),
      isUser: false,
      options: quickOptions
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

    // Detectar idioma del mensaje y responder en ese idioma
    const isQuechua = /[qQ]haway|[aA]kllasqa|[rR]unasimi|[yY]achachiy|[mM]unayki|[iI]mayna|[kK]aypi|[sS]imi|[tT]apukuy|[pP]artidokuna|[aA]pamuy|[aA]llinmi|[kK]usikuni|[nN]apaykullayki/.test(msg);
    const isAimara = /[jJ]iskt|[aA]jllita|[yY]atichäwi|[kK]unjamsa|[wW]alikiwa|[jJ]ichhax|[aA]ru|[mM]unta|[uU]ka|[kK]awkinkiti|[yY]uspajaraki|[jJ]aniwa|[sS]araña|[uU]ñacht’ayita/.test(msg);

    if (isQuechua && i18n.language !== 'qu') {
      return {
        text: '¡Allinmi! Kaypi runasimipi rimasaq. ¿Imaynataq yanapayta munanki?',
        action: () => i18n.changeLanguage('qu')
      };
    }
    if (isAimara && i18n.language !== 'ay') {
      return {
        text: '¡Walikiwa! Jichhax aimar aru parlani. ¿Kunjamsa yanaptʼa?',
        action: () => i18n.changeLanguage('ay')
      };
    }

    // Cambiar idioma por palabras clave en español, quechua, aimara
    if (msg.includes('español') || msg.includes('castellano') || msg === 'es' || msg.includes('spanish')) {
      return {
        text: '¡Listo! Ahora te hablaré en español 😊. ¿En qué puedo ayudarte hoy?',
        action: () => i18n.changeLanguage('es')
      };
    }
    if (msg.includes('quechua') || msg.includes('runasimi') || msg === 'qu' || msg.includes('simi')) {
      return {
        text: '¡Allinmi! Kaypi runasimipi rimasaq. ¿Imaynataq yanapayta munanki?',
        action: () => i18n.changeLanguage('qu')
      };
    }
    if (msg.includes('aimara') || msg.includes('aymara') || msg.includes('jaqiaru') || msg === 'ay' || msg.includes('aru')) {
      return {
        text: '¡Walikiwa! Jichhax aimar aru parlani. ¿Kunjamsa yanaptʼa?',
        action: () => i18n.changeLanguage('ay')
      };
    }
    if (
      msg.includes('idioma') || msg.includes('lengua') || msg.includes('cambiar') || msg.includes('🌐') ||
      msg.includes('simi') || msg.includes('aru')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '¿A qué idioma deseas cambiar?'
            : i18n.language === 'qu'
            ? '¿Mayqin simiman t\'ikrayta munankichu?'
            : '¿Kawki aruru mayjt\'añ munaskta?',
        options: ['Español 🇵🇪', 'Quechua 🏔️', 'Aimara 🌄']
      };
    }

    // Preguntas frecuentes y ayuda
    if (
      msg.includes('pregunta') || msg.includes('frecuente') || msg.includes('faq') ||
      msg.includes('tapukuy') || msg.includes('jiskt')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '¡Claro! Si tienes dudas, dime y te ayudo. También puedes ver las preguntas frecuentes en la sección de ayuda.'
            : i18n.language === 'qu'
            ? '¡Arí! Tapukuykita munankiqa, qillqay, yanapaykusaq. Sapa kuti tapukuykuna yachachiypi kachkan.'
            : '¡Jisa! Jisktʼawinakampixa yanaptʼasma. Sapa kuti jisktʼawinaka yatichäwimpi utji.',
        options: [
          i18n.language === 'es' ? '¿Me enseñas la página?' : i18n.language === 'qu' ? '¿Yachachiwanki plataformata?' : '¿Yatichäwimawa uka página?',
          i18n.language === 'es' ? 'Muéstrame los partidos' : i18n.language === 'qu' ? 'Partidokunata qhawachiy' : 'Partidunakaru uñachtʼayita',
        ]
      };
    }

    // Preguntas abiertas sobre cómo funciona la página
    if (
      (msg.includes('cómo funciona') || msg.includes('como funciona') || msg.includes('funciona la página') || msg.includes('funciona la pagina') ||
      msg.includes('para qué sirve') || msg.includes('para que sirve') || msg.includes('qué hace esta página') || msg.includes('que hace esta pagina') ||
      msg.includes('explica la página') || msg.includes('explica la pagina') || msg.includes('qué puedo hacer aquí') || msg.includes('que puedo hacer aqui'))
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '¡Buena pregunta! Esta página te ayuda a informarte sobre las elecciones, partidos, candidatos y mucho más. Si quieres, te puedo mostrar un tutorial rápido para que aprendas a usarla. ¿Te llevo al tutorial?'
            : i18n.language === 'qu'
            ? '¡Allin tapuy! Kay plataformaqa akllanakunamanta, partidokunamanta, akllasqakunamanta yachachin. Tutorialta ruwasaq, munankiqa pusasaq.'
            : '¡Wali suma jisktʼa! Aka página ukaxa ajllirinakataki, partidonakataki, ajllitanakataki yatiyawinaka uñachtʼayi. Tutoriala uñjañ munta? Irptʼasma.',
        options: [
          i18n.language === 'es' ? 'Sí, muéstrame el tutorial' : i18n.language === 'qu' ? 'Arí, yachachiyta qhawachiy' : 'Jisa, yatichäwi uñachtʼayita',
          i18n.language === 'es' ? 'No, gracias' : i18n.language === 'qu' ? 'Mana, sulpayki' : 'Janiwa, yuspajaraki',
        ],
        action: () => setTimeout(() => navigate('/tutorial'), 1000)
      };
    }

    // ¿Cómo votar?
    if (
      msg.includes('cómo votar') || msg.includes('imayna votayta') || msg.includes('kunjamsa ajlliri')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '¡Votar es fácil! Solo consulta tu mesa, lleva tu DNI y sigue los pasos que te explico en la sección de ayuda. Si tienes dudas, pregúntame.'
            : i18n.language === 'qu'
            ? '¡Votay ancha llakiyuqchu! Mesaykita maskhay, DNI apamuy, yachachiypi yachay. Tapukuyta munankiqa, qillqay.'
            : '¡Ajlliriñaxa wali askicha! Mesa jikxataña, DNI apnaqaña, yatichäwimpi uñjaña. Jisktʼañ munta, jisktʼam.',
        options: [
          i18n.language === 'es' ? '¿Dónde consulto mi RENIEC?' : i18n.language === 'qu' ? 'RENIECpi maypitaq tapukuni?' : 'RENIEC jisktʼañataki kawkinkiti?',
          i18n.language === 'es' ? '¿Me enseñas la página?' : i18n.language === 'qu' ? '¿Yachachiwanki plataformata?' : '¿Yatichäwimawa uka página?',
        ]
      };
    }

    // Redirección a secciones
    if (
      msg.includes('candidato') || msg.includes('ver candidatos') || msg.includes('akllasqa') || msg.includes('ajllita')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '¡Genial! Te muestro la lista de candidatos. Si quieres saber más de alguno, dime su nombre.'
            : i18n.language === 'qu'
            ? '¡Allinmi! Akllasqakunata qhawachisqayki. Aswan yachayta munankiqa, sutinwan qillqay.'
            : '¡Walikiwa! Ajllitanakaru uñachtʼayasma. Jukʼamp yatiñ munta, sutipampi jisktʼam.',
        action: () => setTimeout(() => navigate('/candidatos'), 1000)
      };
    }
    if (
      msg.includes('partido') || msg.includes('ver partidos') || msg.includes('partidu')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? 'Aquí tienes los partidos políticos. ¿Te interesa alguno en especial?'
            : i18n.language === 'qu'
            ? 'Kaypi partidu pulitikukunata rikunki. Mayqinpi aswan yachayta munanki?'
            : 'Akan partidu pulitikuxa uñjañama. Yaqha mayjtʼata munta?',
        action: () => setTimeout(() => navigate('/partidos'), 1000)
      };
    }
    if (
      msg.includes('reniec') || msg.includes('dni') || msg.includes('consultar') || msg.includes('jiskt')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? 'Te llevo a la consulta RENIEC. Ingresa tu DNI y te ayudo con la información.'
            : i18n.language === 'qu'
            ? 'RENIECpi tapukuyta yanapaykusaq. DNIykita qillqay, yanapaykusaq.'
            : 'RENIEC jisktʼawiru irptʼasma. DNIma qillqam, yanaptʼasma.',
        action: () => setTimeout(() => navigate('/reniec'), 1000)
      };
    }
    if (
      msg.includes('tutorial') || msg.includes('video') || msg.includes('yachachiy') || msg.includes('yatichäwi')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '🎥 ¡Vamos al tutorial! Así te explico paso a paso cómo usar la plataforma.'
            : i18n.language === 'qu'
            ? '🎥 ¡Yachachiyta qhawarqayki! Sapa paso rimasaq.'
            : '🎥 Yatichäwiru sarantasma, sapa lurañampi yanaptʼasma.',
        action: () => setTimeout(() => navigate('/tutorial'), 1000)
      };
    }
    if (
      msg.includes('miembro') || msg.includes('mesa') || msg.includes('cronograma') || msg.includes('pachakamay') || msg.includes('ajlliri pacha')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '📋 Aquí tienes la sección de Miembros de Mesa. Si tienes dudas, pregúntame.'
            : i18n.language === 'qu'
            ? '📋 Kaypi mesa miembrukunapaq sekcion kachkan. Tapukuyta munankiqa, qillqay.'
            : '📋 Aka mesa miembrunaka uñachtʼayasma. Jisktʼañ munta, jisktʼam.',
        action: () => setTimeout(() => navigate('/miembros-mesa'), 1000)
      };
    }

    // Saludo y agradecimiento
    if (
      msg.includes('hola') || msg.includes('napaykullayki') || msg.includes('kusisitaw')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '¡Hola! Qué gusto saludarte 😊. ¿Sobre qué tema te gustaría conversar hoy?'
            : i18n.language === 'qu'
            ? '¡Napaykullayki! Kusikuni qillqaykita. Imataq munanki yachayta?' 
            : '¡Kusisitaw juttama! Waliki aruskipañani. Kunsa jisktʼañ munta?',
        options: [
          i18n.language === 'es' ? 'Muéstrame los partidos' : i18n.language === 'qu' ? 'Partidokunata qhawachiy' : 'Partidunakaru uñachtʼayita',
          i18n.language === 'es' ? 'Quiero ver candidatos' : i18n.language === 'qu' ? 'Akllasqakunata rikusha munani' : 'Ajllitanakaru uñjañ munta',
        ]
      };
    }
    if (
      msg.includes('gracias') || msg.includes('sulpayki') || msg.includes('yuspajaraki')
    ) {
      return {
        text:
          i18n.language === 'es'
            ? '¡De nada! Si necesitas algo más, aquí estaré para ayudarte.'
            : i18n.language === 'qu'
            ? '¡Imaynallam! Wak imapipas yanapayta munankiqa, kaypi kani.'
            : '¡Janiwa kuna! Yaqha kunarusa yanaptʼañ munta, akankwa.',
        options: [
          i18n.language === 'es' ? 'No, gracias' : i18n.language === 'qu' ? 'Mana, sulpayki' : 'Janiwa, yuspajaraki',
        ]
      };
    }

    // Default: solo responde sobre la página
    return {
      text:
        i18n.language === 'es'
          ? 'No puedo responderte en este momento, solo puedo responderte sobre la página.'
          : i18n.language === 'qu'
          ? 'Kunanqa manam kutichiyta atiniychu, kay plataforma mantaqa kutichiyta atini.'
          : 'Jichhax janiwa mayampi kutichkiti, aka página ukataw kutichkistani.',
      options: [
        i18n.language === 'es' ? '¿Me enseñas la página?' : i18n.language === 'qu' ? '¿Yachachiwanki plataformata?' : '¿Yatichäwimawa uka página?',
        i18n.language === 'es' ? 'Muéstrame los partidos' : i18n.language === 'qu' ? 'Partidokunata qhawachiy' : 'Partidunakaru uñachtʼayita',
        i18n.language === 'es' ? 'Quiero ver candidatos' : i18n.language === 'qu' ? 'Akllasqakunata rikusha munani' : 'Ajllitanakaru uñjañ munta',
        i18n.language === 'es' ? '¿Dónde consulto mi RENIEC?' : i18n.language === 'qu' ? 'RENIECpi maypitaq tapukuni?' : 'RENIEC jisktʼañataki kawkinkiti?',
      ]
    };
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
