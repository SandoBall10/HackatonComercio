import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es.json';
import qu from './qu.json';
import ay from './ay.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: es,
      qu: qu,
      ay: ay
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
