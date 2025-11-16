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
    const msg = userMessage.toLowerCase().trim();

    // ==================== BÚSQUEDA AVANZADA CON MÚLTIPLES PALABRAS CLAVE ====================
    
    // Cambio de idioma
    if (msg.includes('español') || msg.includes('castellano') || msg === 'es' || msg.includes('spanish')) {
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

    if (msg.includes('aimara') || msg.includes('aymara') || msg.includes('jaqiaru') || msg === 'ay') {
      return {
        text: '¡Walikiwa! Aruxa Aimararu mayjt\'tawa 🌄',
        action: () => i18n.changeLanguage('ay')
      };
    }

    if (msg.includes('idioma') || msg.includes('lengua') || msg.includes('cambiar') || msg.includes('simi') || msg.includes('t\'ikray') || msg.includes('aru') || msg.includes('mayjt\'')) {
      return {
        text: i18n.language === 'es' 
          ? '¿A qué idioma deseas cambiar?' 
          : i18n.language === 'qu'
          ? '¿Mayqin simiman t\'ikrayta munankichu?'
          : '¿Kawki aruru mayjt\'añ munaskta?',
        options: ['Español 🇵🇪', 'Quechua 🏔️', 'Aimara 🌄']
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

    if (msg === 'aimara 🌄') {
      return {
        text: '¡Walikiwa! Aruxa Aimararu mayjt\'tawa 🌄',
        action: () => i18n.changeLanguage('ay')
      };
    }

    // ==================== CANDIDATOS ====================
    if (msg.includes('candidato') || msg.includes('ver candidatos') || msg.includes('akllasqa') || msg.includes('ajllita') ||
        msg.includes('presidente') || msg.includes('umalliq') || msg.includes('apukaki') || msg.includes('postulante') ||
        msg.includes('congresist') || msg.includes('senador') || msg.includes('diputado') || msg.includes('quien') ||
        msg.includes('quienes') || msg.includes('lista') || msg.includes('personas') || msg.includes('aspirante') ||
        msg.includes('formula') || msg.includes('vicepresidente') || msg.includes('autoridad') || msg.includes('gobernante')) {
      return {
        text: t('chatbot.respuestas.candidatos'),
        action: () => setTimeout(() => navigate('/candidatos'), 1000)
      };
    }

    if (msg.includes('partido') || msg.includes('partidos políticos') || msg.includes('partidu') || msg.includes('pulitiku') ||
        msg.includes('organización política') || msg.includes('bancada') || msg.includes('movimiento') ||
        msg.includes('alianza') || msg.includes('coalición') || msg.includes('símbolo') || msg.includes('logo') ||
        msg.includes('agrupación') || msg.includes('color del partido') || msg.includes('emblema')) {
      return {
        text: t('chatbot.respuestas.partidos'),
        action: () => setTimeout(() => navigate('/partidos'), 1000)
      };
    }

    // ==================== MIEMBROS DE MESA ====================
    if (msg.includes('miembro') || msg.includes('mesa') || msg.includes('miembru') || 
        msg.includes('sorteo') || msg.includes('designado') || msg.includes('seleccionado') ||
        msg.includes('capacitacion') || msg.includes('yachachikuy') || msg.includes('yatiqäwi') || msg.includes('instrucciones') ||
        msg.includes('fui sorteado') || msg.includes('me toco') || msg.includes('me eligieron') ||
        msg.includes('tengo que ir') || msg.includes('debo ir') || msg.includes('obligación') ||
        msg.includes('multa') || msg.includes('sanción') || msg.includes('no puedo ir') ||
        msg.includes('excusa') || msg.includes('justificación') || msg.includes('impedimento') ||
        msg.includes('que debo hacer') || msg.includes('que hacer') || msg.includes('como miembro') ||
        msg.includes('personero') || msg.includes('presidente de mesa') || msg.includes('secretario') ||
        msg.includes('vocal') || msg.includes('ánfora') || msg.includes('acta') || msg.includes('conteo')) {
      return {
        text: i18n.language === 'es'
          ? '¡Te llevaré a la sección de Miembros de Mesa! 📋\n\nAhí encontrarás:\n\n✓ Cronograma del día electoral\n✓ Instrucciones paso a paso\n✓ Tus derechos y deberes\n✓ Capacitación disponible\n✓ Compensación económica S/ 120\n✓ Excusas válidas\n✓ Consecuencias por inasistencia'
          : i18n.language === 'qu'
          ? '¡Mesa Miembrukunapa sekciónman pusasqayki! 📋\n\nChaypi tarikunki:\n\n✓ P\'unchaw akllana pachakamay\n✓ Yachachiy sapa llamk\'ay\n✓ Derechoykikuna ruwanaykikunapas\n✓ Yachachikuy kachkan\n✓ Qullqi yanapakuy S/ 120\n✓ Excusakuna allin\n✓ Mana rispa consecuenciakuna'
          : '¡Mesa Miembrunaka lurañaru irpt\'asma! 📋\n\nAkaniwa jikxatañama:\n\n✓ Urumpi ajlliri pacha\n✓ Yatichäwi sapa luraña\n✓ Derechunakama lurawinakamasa\n✓ Yatiqäwi utji\n✓ Qullqi yanapäwi S/ 120\n✓ Excusanaka waliki\n✓ Jan saramaki consecuencianaka',
        action: () => setTimeout(() => navigate('/miembros-mesa'), 1000)
      };
    }

    // ==================== RENIEC / CONSULTAS ====================
    if (msg.includes('reniec') || msg.includes('consultar') || msg.includes('dni') || 
        msg.includes('tapukuy') || msg.includes('jiskt\'a') || msg.includes('verificar') || msg.includes('documento') ||
        msg.includes('identidad') || msg.includes('buscar') || msg.includes('donde voto') || msg.includes('mi mesa') ||
        msg.includes('local de votación') || msg.includes('local electoral') || msg.includes('mi local') ||
        msg.includes('que mesa') || msg.includes('numero de mesa') || msg.includes('donde me toca') ||
        msg.includes('ubigeo') || msg.includes('distrito') || msg.includes('provincia') || msg.includes('departamento') ||
        msg.includes('carnet') || msg.includes('cédula') || msg.includes('documento nacional') ||
        msg.includes('consulta dni') || msg.includes('validar') || msg.includes('registro') || msg.includes('padrón')) {
      return {
        text: t('chatbot.respuestas.reniec') + '\n\n💡 Puedes consultar:\n✓ Tu local de votación\n✓ Tu número de mesa\n✓ Dirección exacta\n✓ Mapa de ubicación',
        action: () => setTimeout(() => navigate('/reniec'), 1000)
      };
    }

    // ==================== TUTORIAL / CAPACITACIÓN ====================
    if (msg.includes('tutorial') || msg.includes('video') || msg.includes('aprend') || 
        msg.includes('capacit') || msg.includes('instruccion') || msg.includes('como funciona') ||
        msg.includes('guia') || msg.includes('yachachikuy') || msg.includes('yatichäwi') || msg.includes('yachay video') ||
        msg.includes('enseñanza') || msg.includes('curso') || msg.includes('explicación') || msg.includes('como se vota') ||
        msg.includes('como votar') || msg.includes('paso a paso') || msg.includes('manual') ||
        msg.includes('educación') || msg.includes('formación') || msg.includes('entrenamiento') ||
        msg.includes('simulacro') || msg.includes('práctica') || msg.includes('ejemplo') ||
        msg.includes('demostración') || msg.includes('no entiendo') || msg.includes('no se como') ||
        msg.includes('como hago') || msg.includes('explica') || msg.includes('muestra') || msg.includes('enseña') ||
        msg.includes('funciona la pagina') || msg.includes('funciona esto') || msg.includes('usar la pagina') ||
        msg.includes('navegar') || msg.includes('usar el sistema') || msg.includes('como usar') ||
        msg.includes('quiero saber como funciona') || msg.includes('como funciona la web') ||
        msg.includes('como funciona el sitio') || msg.includes('necesito ayuda para usar')) {
      return {
        text: i18n.language === 'es'
          ? '🎥 ¡Te llevaré a la sección de Tutorial!\n\nAhí encontrarás:\n\n✓ Videos educativos sobre el proceso electoral\n✓ Instrucciones paso a paso para votar\n✓ Preguntas frecuentes (FAQ)\n✓ Guías interactivas\n✓ Explicación de la cédula de sufragio\n✓ Simuladores de votación\n\nPerfecto para aprender todo sobre las elecciones 2026.'
          : i18n.language === 'qu'
          ? '🎥 ¡Tutorial sekciónman pusasqayki!\n\nChaypi tarikunki:\n\n✓ Yachachiy videokuna akllana ruwaykunamanta\n✓ Yachachiy sapa llamk\'ay akllanapaq\n✓ Tapukuykuna sapa kuti\n✓ Guiakuna interactivokuna\n✓ Sufragio cédulapa yachachiy\n✓ Akllana simuladorakuna\n\nAllinmi 2026 akllanakunamanta tukuy yachanapaq.'
          : '🎥 ¡Tutorial lurañaru irpt\'asma!\n\nAkaniwa jikxatañama:\n\n✓ Yatichäwi videokuna ajlliri lurawimpi\n✓ Yatichäwi sapa luraña ajlliritaki\n✓ Jiskt\'awinaka sapa kuti\n✓ Guiaxa interactivonaka\n✓ Sufragio cédulana yatichäwi\n✓ Ajlliri simuladoranaka\n\nWalikiwa 2026 ajllirinakata taqi yatiqañataki.',
        action: () => setTimeout(() => navigate('/tutorial'), 1000)
      };
    }

    // ==================== CRONOGRAMA / FECHAS ====================
    if (msg.includes('cronograma') || msg.includes('fecha') || msg.includes('calendario') || 
        msg.includes('cuando') || msg.includes('pachakamay') || msg.includes('pacha') || msg.includes('dia') ||
        msg.includes('elecciones') || msg.includes('akllana') || msg.includes('ajlliri') || msg.includes('abril') ||
        msg.includes('timeline') || msg.includes('tiempo') || msg.includes('que dia') || msg.includes('cuando es') ||
        msg.includes('que mes') || msg.includes('año') || msg.includes('2026') || msg.includes('programación') ||
        msg.includes('agenda') || msg.includes('eventos') || msg.includes('actividades') ||
        msg.includes('fechas importantes') || msg.includes('hitos') || msg.includes('etapas') ||
        msg.includes('proceso electoral') || msg.includes('fases') || msg.includes('periodos')) {
      return {
        text: i18n.language === 'es'
          ? '📅 Las Elecciones Generales 2026 serán el:\n\n🗳️ 12 de ABRIL de 2026\n\nTe llevaré al cronograma completo donde verás:\n\n✓ Fechas importantes 2025-2026\n✓ Eventos por mes\n✓ Plazos de inscripción\n✓ Periodos de campaña\n✓ Fechas de sorteo de miembros\n✓ Cronograma de elecciones primarias'
          : i18n.language === 'qu'
          ? '📅 Elecciones Generales 2026 kanqa:\n\n🗳️ 12 ABRIL 2026pi\n\nHunt\'a pachakamaman pusasqayki maypichus qhawanki:\n\n✓ Hatun p\'unchawkuna 2025-2026\n✓ Ruwanakuna sapa killa\n✓ Qillqakuy pachakuna\n✓ Campaña pachakuna\n✓ Mesa miembrukuna sorteo\n✓ Ñawpaq akllana pachakamay'
          : '📅 Elecciones Generales 2026 kanipuniwa:\n\n🗳️ 12 ABRIL 2026na\n\nPhuqhat pacha lurañaru irpt\'asma ukaniwa uñjañataki:\n\n✓ Jach\'a urunaka 2025-2026\n✓ Luräwinaka sapa phaxsi\n✓ Qillqañataki pachanaxa\n✓ Campaña pachanaxa\n✓ Mesa miembrunaka sorteo\n✓ Nayrïr ajlliri pacha',
        action: () => setTimeout(() => navigate('/'), 1000)
      };
    }

    // ==================== VOTO / VOTACIÓN ====================
    if (msg.includes('vot') || msg.includes('sufrag') || msg.includes('akll') || msg.includes('ajll') ||
        msg.includes('elegir') || msg.includes('como votar') || msg.includes('donde votar') ||
        msg.includes('local') || msg.includes('mesa electoral') || msg.includes('como marco') ||
        msg.includes('como voto correctamente') || msg.includes('marcado') || msg.includes('tachar') ||
        msg.includes('seleccionar') || msg.includes('escoger') || msg.includes('cedula') ||
        msg.includes('boleta') || msg.includes('papeleta') || msg.includes('en blanco') ||
        msg.includes('nulo') || msg.includes('válido') || msg.includes('voto viciado') ||
        msg.includes('error al votar') || msg.includes('equivocación')) {
      return {
        text: i18n.language === 'es'
          ? '📍 Para votar necesitas:\n\n1. Tener tu DNI vigente\n2. Conocer tu local de votación (consulta en RENIEC)\n3. Ir el 12 de abril de 2026\n4. Horario: 8:00 AM - 4:00 PM\n\n💡 Aprende cómo marcar correctamente tu voto en el Tutorial.\n\n¿Quieres consultar tu local de votación?'
          : i18n.language === 'qu'
          ? '📍 Akllanapaqqa necesitankichu:\n\n1. DNI allin kachkan\n2. Yachay akllana wasiykita (RENIEC tapukuy)\n3. Riy 12 abril 2026pi\n4. Pacha: 8:00 AM - 4:00 PM\n\n💡 Yachay imallataq allin akllayta Tutorialpi.\n\n¿Akllana wasiykita tapukuyta munankichu?'
          : '📍 Ajlliriñatakixa munasma:\n\n1. DNI suma kawi\n2. Yatiqa ajlliri utama (RENIEC jiskt\'aña)\n3. Sarma 12 abril 2026na\n4. Pacha: 8:00 AM - 4:00 PM\n\n💡 Yatiqa kunjamasa waliki ajllixa Tutorialna.\n\n¿Ajlliri utama jiskt\'añ munaskta?',
        options: [t('chatbot.consultarReniec'), 'Ver Tutorial', 'Ver Miembros de Mesa', t('chatbot.verCandidatos')]
      };
    }

    // ==================== PLAN DE GOBIERNO ====================
    if (msg.includes('plan') || msg.includes('propuesta') || msg.includes('gobierno') ||
        msg.includes('yuyay') || msg.includes('kamachiy') || msg.includes('kamachi') || msg.includes('programa') ||
        msg.includes('promesa') || msg.includes('compromiso') || msg.includes('ofrecimiento') ||
        msg.includes('proyecto') || msg.includes('iniciativa') || msg.includes('reforma') ||
        msg.includes('politica') || msg.includes('estrategia') || msg.includes('vision') ||
        msg.includes('que ofrece') || msg.includes('que propone') || msg.includes('que hará') ||
        msg.includes('que promete') || msg.includes('objetivo') || msg.includes('meta')) {
      return {
        text: i18n.language === 'es'
          ? '📋 Para ver los planes de gobierno:\n\n1. Ve a la sección de Candidatos\n2. Selecciona un partido\n3. Revisa la pestaña "Plan de Gobierno"\n\nAhí encontrarás:\n✓ Propuestas económicas\n✓ Planes de salud y educación\n✓ Reformas institucionales\n✓ Proyectos sociales\n✓ Políticas de seguridad\n\n¿Te llevo a ver los candidatos?'
          : i18n.language === 'qu'
          ? '📋 Kamachiy yuyaykunata qhawanapaq:\n\n1. Riy Akllasqakuna sekciónman\n2. Akllakuy huk partiduta\n3. Qhaway "Kamachiy Yuyay" pestañata\n\nChaypi tarikunki:\n✓ Qullqi yuyaykuna\n✓ Qhali kay yachay yuyaykuna\n✓ Kamachiy t\'ikraykuna\n✓ Llaqta ruwanakuna\n✓ Amachay kamachikuna\n\n¿Akllasqakunata qhawaman pusasqayki?'
          : '📋 Kamachi yuyarinaka uñjañataki:\n\n1. Sarma Ajllitanaka lurañaru\n2. Ajlltma maya partiduxa\n3. Uñjma "Kamachi Yuyapa" pestañaxa\n\nAkaniwa jikxatasipxta:\n✓ Qullqi amuyunaka\n✓ K\'umaräñampi yatiqäwi amuyunaka\n✓ Kamachi mayjt\'awinaka\n✓ Jaqinaka lurawinaka\n✓ Amtäwi kamachinaxa\n\n¿Ajllitanakaru uñjar irpt\'asma?',
        options: [t('chatbot.verCandidatos'), t('chatbot.verPartidos')]
      };
    }

    // ==================== REQUISITOS / DOCUMENTOS ====================
    if (msg.includes('requisito') || msg.includes('documento') || msg.includes('necesito') ||
        msg.includes('llevar') || msg.includes('papeles') || msg.includes('tramite') ||
        msg.includes('que debo llevar') || msg.includes('que necesito') || msg.includes('que debo presentar') ||
        msg.includes('que documentos') || msg.includes('carnet') || msg.includes('identificación') ||
        msg.includes('credencial') || msg.includes('comprobante') || msg.includes('certificado') ||
        msg.includes('constancia') || msg.includes('permiso') || msg.includes('autorizacion') ||
        msg.includes('menor de edad') || msg.includes('extranjero') || msg.includes('impedido')) {
      return {
        text: i18n.language === 'es'
          ? '📄 Requisitos para votar:\n\n✓ DNI original vigente\n✓ Ser mayor de 18 años\n✓ No tener impedimentos legales\n\n📋 Si eres miembro de mesa, además:\n✓ Presentarte a las 6:00 AM\n✓ Llevar tu designación (opcional)\n\n⚠️ NO se aceptan:\n✗ Fotocopias de DNI\n✗ DNI vencido\n✗ Pasaporte (solo para residentes en el extranjero)\n\n¿Necesitas más información?'
          : i18n.language === 'qu'
          ? '📄 Akllanapaq requisitukuna:\n\n✓ DNI original allin kachkan\n✓ 18 watasniyuq kay\n✓ Mana impedimentu legalkuna\n\n📋 Sichus mesa miembruchu kanki:\n✓ Chayamuy 6:00 AM nisqapi\n✓ Apay designaciónniykita (opcional)\n\n⚠️ MANA chaskikunchu:\n✗ DNI fotocopia\n✗ DNI pasasqa\n✗ Pasaporte (extranjerokunallapaq)\n\n¿Aswan willakuyta necesitankichu?'
          : '📄 Ajlliriñataki munasma:\n\n✓ DNI original suma kawi\n✓ 18 maranakani kaña\n✓ Jani impedimentu legales\n\n📋 Ukhamaxa mesa miembrupchati ukhasti:\n✓ Puriña 6:00 AM nisqana\n✓ Apaña designaciónma (opcional)\n\n⚠️ JANIWA katuyapkiti:\n✗ DNI fotocopia\n✗ DNI pasatawa\n✗ Pasaporte (extranjeronakataki)\n\n¿Juk\'ampi yatiyawi munaskta?',
        options: ['Ver Miembros de Mesa', t('chatbot.consultarReniec'), t('chatbot.verCandidatos')]
      };
    }

    // ==================== UBICACIÓN / LOCAL ====================
    if (msg.includes('donde') || msg.includes('ubica') || msg.includes('direccion') ||
        msg.includes('lugar') || msg.includes('maypi') || msg.includes('cheqa') || msg.includes('kawki') ||
        msg.includes('local') || msg.includes('colegio') || msg.includes('escuela') ||
        msg.includes('institucion') || msg.includes('centro de votacion') || msg.includes('sede') ||
        msg.includes('como llego') || msg.includes('direccion exacta') || msg.includes('ubicacion exacta') ||
        msg.includes('mapa') || msg.includes('referencia') || msg.includes('cerca de') ||
        msg.includes('zona') || msg.includes('barrio') || msg.includes('avenida') || msg.includes('calle')) {
      return {
        text: i18n.language === 'es'
          ? '📍 Para saber dónde votas:\n\n1. Consulta en RENIEC con tu DNI\n2. Te mostrará:\n   ✓ Tu local de votación exacto\n   ✓ Número de mesa\n   ✓ Dirección completa\n   ✓ Distrito y provincia\n   ✓ Mapa de ubicación\n\n💡 Tip: Visita tu local antes del día de elecciones para familiarizarte con la ubicación.\n\n¿Te llevo a la consulta RENIEC?'
          : i18n.language === 'qu'
          ? '📍 Yachanaykipaq maypichus akllanki:\n\n1. RENIEC tapukuy DNIykiwan\n2. Rikuchisunki:\n   ✓ Akllana wasiykita cheqamanta\n   ✓ Mesa yupayninta\n   ✓ Hunt\'a direccionninta\n   ✓ Distritonta provincianta\n   ✓ Mapa maypichus kachkan\n\n💡 Yuyay: Watukuy wasiykita ñawpaqmanta familiarizanaykipaq.\n\n¿RENIEC tapukuyman pusasqayki?'
          : '📍 Yatiqañataki kawkirus ajllita:\n\n1. RENIEC jiskt\'aña DNImampi\n2. Uñacht\'añaniwa:\n   ✓ Ajlliri utama chiqampi\n   ✓ Mesa jakhupa\n   ✓ Phuqhat direcciónma\n   ✓ Distritoma provinciama\n   ✓ Mapa kawkins utji\n\n💡 Amuyu: Sartma utamaru nayraqata yatiqañataki.\n\n¿RENIEC jiskt\'awiñaru irpt\'asma?',
        options: [t('chatbot.consultarReniec'), 'Ver Miembros de Mesa']
      };
    }

    // ==================== COMPENSACIÓN / PAGO ====================
    if (msg.includes('compensa') || msg.includes('pago') || msg.includes('dinero') ||
        msg.includes('sueldo') || msg.includes('qullqi') || msg.includes('cuanto') ||
        msg.includes('cobrar') || msg.includes('plata') || msg.includes('remuneracion') ||
        msg.includes('recibir') || msg.includes('ganancia') || msg.includes('ingreso') ||
        msg.includes('pagan') || msg.includes('cuando cobro') || msg.includes('cuanto me dan') ||
        msg.includes('retribucion') || msg.includes('honorario') || msg.includes('bonifico') ||
        msg.includes('cuenta bancaria') || msg.includes('deposito')) {
      return {
        text: i18n.language === 'es'
          ? '💰 Compensación para miembros de mesa:\n\n✓ Monto: S/ 120.00 soles\n✓ Se paga después de las elecciones\n✓ Incluye refrigerio y almuerzo el día de elecciones\n\n📝 Cómo recibir tu compensación:\n1. Cumple tu función completa\n2. Firma el acta al finalizar\n3. El pago se realiza por depósito bancario\n4. Recibes notificación en 15-30 días\n\n¿Quieres ver más información sobre miembros de mesa?'
          : i18n.language === 'qu'
          ? '💰 Mesa miembrukunapaq yanapakuy:\n\n✓ Qullqi: S/ 120.00 sulikuna\n✓ Qunakun akllanakunapa qhipanpi\n✓ Mikhuy almuerzo ima kachkan akllana p\'unchaynin\n\n📝 Imallataq yanapakuyniykita chaskinaykipaq:\n1. Hunt\'aykuy llamk\'ayniykita\n2. Qillqakuy actapi tukuyninpi\n3. Pagokuqa banco depósitowanmi\n4. Willayta chaskinkillam 15-30 p\'unchawkunapi\n\n¿Mesa miembrukunamanta aswan willakuyta qhawayta munankichu?'
          : '💰 Mesa miembrunakaru yanapäwi:\n\n✓ Qullqi: S/ 120.00 qullqinaxa\n✓ Churapuniwa ajllirinakampi qhipana\n✓ Manq\'awi almuerzo utji ajlliri uruxa\n\n📝 Kunjamsa yanapäwima katuqañataki:\n1. Phuqhachma lurawimaxa\n2. Qillqantma actana tukusanxa\n3. Pajasi bancuru depósitompiwa\n4. Yatiyawi katuntama 15-30 urunakana\n\n¿Mesa miembrunakampi juk\'ampi yatiyawi uñjañ munaskta?',
        options: ['Ver Miembros de Mesa', 'Ver derechos y deberes', t('chatbot.respuestas.noGracias')]
      };
    }

    // ==================== HORARIO ====================
    if (msg.includes('horario') || msg.includes('hora') || msg.includes('tiempo') ||
        msg.includes('abre') || msg.includes('cierra') || msg.includes('pacha') || msg.includes('hura') ||
        msg.includes('que hora') || msg.includes('a que hora') || msg.includes('desde que hora') ||
        msg.includes('hasta que hora') || msg.includes('cuando abre') || msg.includes('cuando cierra') ||
        msg.includes('apertura') || msg.includes('clausura') || msg.includes('inicio') ||
        msg.includes('termina') || msg.includes('finaliza') || msg.includes('duracion') ||
        msg.includes('cuanto dura') || msg.includes('llegar temprano') || msg.includes('llegar tarde')) {
      return {
        text: i18n.language === 'es'
          ? '⏰ Horarios importantes:\n\n🗳️ VOTACIÓN CIUDADANA:\n   ✓ Inicio: 8:00 AM\n   ✓ Cierre: 4:00 PM\n   ✓ Duración: 8 horas\n\n📋 MIEMBROS DE MESA:\n   ✓ Llegada: 6:00 AM (obligatorio)\n   ✓ Instalación: 7:00 AM\n   ✓ Conteo y cierre: 4:00 PM - 7:00 PM\n   ✓ Jornada completa: ~13 horas\n\n💡 Recomendaciones:\n   • Llega temprano para evitar colas\n   • Mejor horario: 9:00 AM - 2:00 PM\n   • Evita las últimas horas (3:00 PM - 4:00 PM)\n\n¿Necesitas el cronograma completo?'
          : i18n.language === 'qu'
          ? '⏰ Hatun horakuna:\n\n🗳️ LLAQTA AKLLANA:\n   ✓ Qallariy: 8:00 AM\n   ✓ Wichq\'ay: 4:00 PM\n   ✓ Unay: 8 horakuna\n\n📋 MESA MIEMBRUKUNA:\n   ✓ Chayamuy: 6:00 AM (obligatorio)\n   ✓ Churay: 7:00 AM\n   ✓ Yupay wichq\'ay: 4:00 PM - 7:00 PM\n   ✓ Hunt\'a llamk\'ay: ~13 horakuna\n\n💡 Yuyaychaykuna:\n   • Chayamuy ñawpaqmanta mana suyakuypaq\n   • Allin pacha: 9:00 AM - 2:00 PM\n   • Qhipaq horakuna mana riy: 3:00 PM - 4:00 PM\n\n¿Hunt\'a pachakamaypi necesitankichu?'
          : '⏰ Jach\'a huraxa:\n\n🗳️ JAQINAKA AJLLIRI:\n   ✓ Qalltawi: 8:00 AM\n   ✓ Jist\'araña: 4:00 PM\n   ✓ Jayp\'u: 8 horanaka\n\n📋 MESA MIEMBRUNAKA:\n   ✓ Puriña: 6:00 AM (obligatorio)\n   ✓ Churañataki: 7:00 AM\n   ✓ Jakhuña jist\'araña: 4:00 PM - 7:00 PM\n   ✓ Phuqhat lurawixa: ~13 horanaka\n\n💡 Amuyunaka:\n   • Purma nayraqata jan suyt\'añataki\n   • Suma pacha: 9:00 AM - 2:00 PM\n   • Qhipa horanaka jan sarañataki: 3:00 PM - 4:00 PM\n\n¿Phuqhat pacha munaskta?',
        options: ['Ver Miembros de Mesa', t('chatbot.respuestas.verCronograma')]
      };
    }

    // ==================== AYUDA / SOPORTE ====================
    if (msg.includes('ayuda') || msg.includes('help') || msg.includes('yanapay') || msg.includes('yanap') ||
        msg.includes('apoyo') || msg.includes('asistencia') || msg.includes('soporte') ||
        msg.includes('auxilio') || msg.includes('orientacion') || msg.includes('informacion') ||
        msg.includes('duda') || msg.includes('pregunta') || msg.includes('consulta') ||
        msg.includes('no se') || msg.includes('no entiendo') || msg.includes('confundido') ||
        msg.includes('explicame') || msg.includes('necesito saber') || msg.includes('quiero saber') ||
        msg.includes('me pueden ayudar') || msg.includes('quisiera') || msg.includes('podria')) {
      return {
        text: i18n.language === 'es'
          ? '👋 ¡Hola! Estoy aquí para ayudarte con todo sobre las Elecciones 2026.\n\nPuedo ayudarte con:\n\n🗳️ Candidatos y partidos políticos\n📋 Miembros de mesa (capacitación, derechos, compensación)\n📍 Local y mesa de votación (consulta RENIEC)\n🎥 Tutorial de cómo votar\n📅 Cronograma electoral\n💡 Requisitos y documentos\n⏰ Horarios de votación\n\n¿Qué te gustaría saber?'
          : i18n.language === 'qu'
          ? '👋 ¡Napaykullayki! Kaypiñam kani 2026 Akllanakunamanta yanapasqaykipaq.\n\nYanapasqayki puwanim:\n\n🗳️ Akllasqakuna partidukunamanta\n📋 Mesa miembrukuna\n📍 Akllana wasiykimanta\n🎥 Imallataq akllanapaq tutorial\n📅 Akllana pachakamay\n💡 Requisitukuna documentukunapas\n⏰ Akllana horakuna\n\n¿Imatachus yachayta munankichu?'
          : '👋 ¡Jumaru napayañataki! Akaniwa 2026 Ajllirinakampi yanapt\'añataki.\n\nYanapt\'asma puwirita:\n\n🗳️ Ajllitanaka partidunakampi\n📋 Mesa miembrunaka\n📍 Ajlliri utamata\n🎥 Kunjamasa ajlliri tutorial\n📅 Ajlliri pacha\n💡 Munasirinaka documentunakasa\n⏰ Ajlliri horanaka\n\n¿Kunas yatiñ munaskta?',
        options: [
          'Tutorial de la página',
          t('chatbot.verPartidos'),
          'Ver Miembros de Mesa',
          t('chatbot.consultarReniec'),
          t('chatbot.cronograma')
        ]
      };
    }

    // ==================== SALUDOS ====================
    if (msg.includes('hola') || msg.includes('buenos días') || msg.includes('buenas tardes') || 
        msg.includes('napay') || msg.includes('kusisi') || msg.includes('buenas noches') || msg.includes('hey') ||
        msg.includes('saludos') || msg.includes('buen dia') || msg.includes('buenas') ||
        msg.includes('que tal') || msg.includes('como estas') || msg.includes('holi') ||
        msg.includes('alo') || msg.includes('presente') || msg.includes('inicio')) {
      return {
        text: i18n.language === 'es'
          ? '👋 ¡Hola! Bienvenido/a a tu asistente electoral para las Elecciones 2026.\n\nSoy tu guía virtual y estoy aquí para ayudarte con:\n\n✓ Información de candidatos\n✓ Partidos políticos\n✓ Miembros de mesa\n✓ Consultas RENIEC\n✓ Tutoriales de votación\n✓ Cronograma electoral\n\n¿En qué puedo ayudarte hoy?'
          : i18n.language === 'qu'
          ? '👋 ¡Napaykullayki! Allin hamuy 2026 Akllanakunapaq yanapakuykuman.\n\nÑuqaqa kani guía virtual chaymanta kaypiñam kani yanapasqaykipaq:\n\n✓ Akllasqakunamanta willakuy\n✓ Partidu pulitikukuna\n✓ Mesa miembrukuna\n✓ RENIEC tapukuykuna\n✓ Akllana tutorialkuna\n✓ Akllana pachakamay\n\n¿Imaynatataq yanapasqaykiman kunan?'
          : '👋 ¡Jumaru napayañataki! Suma jutawi 2026 Ajllirinakana yanapt\'irimaru.\n\nNayaxa guía virtualawa ukat akaniwa yanapt\'añataki:\n\n✓ Ajllitanakampi yatiyawi\n✓ Partidu pulitikuxa\n✓ Mesa miembrunaka\n✓ RENIEC jiskt\'awinaka\n✓ Ajlliri tutorialnaka\n✓ Ajlliri pacha\n\n¿Kunsa yanapt\'asma jichhaxa?',
        options: [
          'Tutorial de la página',
          t('chatbot.verPartidos'),
          'Ver Miembros de Mesa',
          t('chatbot.verCandidatos'),
          t('chatbot.consultarReniec')
        ]
      };
    }

    // ==================== DESPEDIDAS / AGRADECIMIENTOS ====================
    if (msg.includes('gracias') || msg.includes('sulpayki') || msg.includes('yuspajaraki') || msg.includes('adiós') ||
        msg.includes('chau') || msg.includes('hasta luego') || msg.includes('bye') ||
        msg.includes('muchas gracias') || msg.includes('mil gracias') || msg.includes('te agradezco') ||
        msg.includes('agradecido') || msg.includes('perfecto') || msg.includes('excelente') ||
        msg.includes('genial') || msg.includes('ok gracias') || msg.includes('vale') ||
        msg.includes('nos vemos') || msg.includes('hasta pronto') || msg.includes('adios') ||
        msg.includes('me voy') || msg.includes('ya me voy') || msg.includes('cierro')) {
      return {
        text: i18n.language === 'es'
          ? '😊 ¡De nada! Fue un placer ayudarte.\n\n📌 Recuerda:\n✓ Las Elecciones son el 12 de abril de 2026\n✓ Lleva tu DNI original\n✓ Vota informado/a\n\n🗳️ Tu voto construye el futuro del Perú.\n\n¡Hasta pronto! Regresa cuando necesites más información.'
          : i18n.language === 'qu'
          ? '😊 ¡Imanapas! Kusisqa kani yanapasqaykiwan.\n\n📌 Yuyariy:\n✓ Akllanakuna kanqa 12 abril 2026pi\n✓ Apay DNI originalniykita\n✓ Akllakuy yachachikusqa\n\n🗳️ Akllayniyki Perúpa hamuq pachantan ruwan.\n\n¡Tupananchiskama! Kutirimuy aswan willakuyta necesitaspayki.'
          : '😊 ¡Jan kuna lurawixa! Kusisitawa yanapt\'asma.\n\n📌 Amtañataki:\n✓ Ajllirinaka kanipuniwa 12 abril 2026na\n✓ Apaña DNI originalma\n✓ Ajlltma yatiqata\n\n🗳️ Ajlltamaxa Perúna jutirinakaxa lurañawa.\n\n¡Jikisiñkama! Kutt\'atma juk\'ampi yatiyawi munaskasti.',
        options: [
          'Tutorial de la página',
          t('chatbot.verPartidos'),
          'Ver Miembros de Mesa',
          t('chatbot.respuestas.noGracias')
        ]
      };
    }

    // ==================== INICIO / PÁGINA PRINCIPAL ====================
    if (msg.includes('inicio') || msg.includes('home') || msg.includes('principal') || 
        msg.includes('qallariy') || msg.includes('qalltawi') || msg.includes('menu') || msg.includes('portada') ||
        msg.includes('pagina principal') || msg.includes('regresar') || msg.includes('volver') ||
        msg.includes('atras') || msg.includes('salir') || msg.includes('volver al inicio')) {
      return {
        text: i18n.language === 'es'
          ? '🏠 Te llevaré a la página de inicio.\n\nDesde ahí podrás acceder a todas las secciones:\n✓ Cronograma electoral\n✓ Noticias y eventos\n✓ Navegación completa'
          : i18n.language === 'qu'
          ? '🏠 Qallariy p\'unchaypi pusasqayki.\n\nChaypi tukuy sekciónkunaman yaykuyta atinki:\n✓ Akllana pachakamay\n✓ Willakuykuna ruwanakuna\n✓ Hunt\'a puririchiy'
          : '🏠 Qalltawi ururu irpt\'asma.\n\nUkanxa taqi luräwinakaru mantañataki:\n✓ Ajlliri pacha\n✓ Yatiyawinaka luräwinakasa\n✓ Phuqhat sarnaqäwi',
        action: () => setTimeout(() => navigate('/'), 1000)
      };
    }

    // Respuesta por defecto
    return {
      text: t('chatbot.respuestas.default'),
      options: [
        'Tutorial de la página',
        t('chatbot.verPartidos'),
        'Ver Miembros de Mesa',
        t('chatbot.verCandidatos'),
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
    
    // Manejar "Tutorial de la página" directamente
    if (option === 'Tutorial de la página') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const tutorialResponse = {
          text: i18n.language === 'es'
            ? '🎥 ¡Perfecto! Te llevaré a la sección de Tutorial.\n\nAhí encontrarás:\n\n✓ Videos educativos sobre el proceso electoral\n✓ Instrucciones paso a paso para votar\n✓ Preguntas frecuentes (FAQ)\n✓ Guías interactivas\n✓ Explicación de la cédula de sufragio\n✓ Simuladores de votación\n\nPerfecto para aprender todo sobre las elecciones 2026.'
            : i18n.language === 'qu'
            ? '🎥 ¡Allinmi! Tutorial sekciónman pusasqayki.\n\nChaypi tarikunki:\n\n✓ Yachachiy videokuna akllana ruwaykunamanta\n✓ Yachachiy sapa llamk\'ay akllanapaq\n✓ Tapukuykuna sapa kuti\n✓ Guiakuna interactivokuna\n✓ Sufragio cédulapa yachachiy\n✓ Akllana simuladorakuna\n\nAllinmi 2026 akllanakunamanta tukuy yachanapaq.'
            : '🎥 ¡Walikiwa! Tutorial lurañaru irpt\'asma.\n\nAkaniwa jikxatañama:\n\n✓ Yatichäwi videokuna ajlliri lurawimpi\n✓ Yatichäwi sapa luraña ajlliritaki\n✓ Jiskt\'awinaka sapa kuti\n✓ Guiaxa interactivonaka\n✓ Sufragio cédulana yatichäwi\n✓ Ajlliri simuladoranaka\n\nWalikiwa 2026 ajllirinakata taqi yatiqañataki.'
        };
        addMessage(tutorialResponse.text, false);
        setTimeout(() => navigate('/tutorial'), 1000);
      }, 800);
      return;
    }
    
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
        aria-label="Conversa con Yachay"
      >
        <img src={avatarUrl} alt="Yachay" />
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
