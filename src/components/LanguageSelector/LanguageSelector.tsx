import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button
        className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
        aria-label="Cambiar a Español"
      >
        🇵🇪 ES
      </button>
      <button
        className={`lang-btn ${i18n.language === 'qu' ? 'active' : ''}`}
        onClick={() => changeLanguage('qu')}
        aria-label="Cambiar a Quechua"
      >
        🏔️ QU
      </button>
    </div>
  );
};

export default LanguageSelector;
