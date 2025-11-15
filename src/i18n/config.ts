import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es.json';
import qu from './qu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: es,
      qu: qu
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
