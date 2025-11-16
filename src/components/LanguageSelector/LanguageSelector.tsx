import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLanguageInfo = (lng: string) => {
    const languages: { [key: string]: { emoji: string; name: string; code: string } } = {
      es: { emoji: '🇵🇪', name: 'Español', code: 'ES' },
      qu: { emoji: '🏔️', name: 'Quechua', code: 'QU' },
      ay: { emoji: '🌄', name: 'Aimara', code: 'AY' }
    };
    return languages[lng] || languages.es;
  };

  const currentLang = getLanguageInfo(i18n.language);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="lang-btn-dropdown"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
      >
        <span className="lang-current">
          {currentLang.emoji} {currentLang.code}
        </span>
        <svg 
          className={`lang-arrow ${isOpen ? 'open' : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="lang-dropdown">
          <button
            className={`lang-option ${i18n.language === 'es' ? 'active' : ''}`}
            onClick={() => changeLanguage('es')}
          >
            <span className="lang-emoji">🇵🇪</span>
            <span className="lang-name">Español</span>
            {i18n.language === 'es' && <span className="lang-check">✓</span>}
          </button>
          <button
            className={`lang-option ${i18n.language === 'qu' ? 'active' : ''}`}
            onClick={() => changeLanguage('qu')}
          >
            <span className="lang-emoji">🏔️</span>
            <span className="lang-name">Quechua</span>
            {i18n.language === 'qu' && <span className="lang-check">✓</span>}
          </button>
          <button
            className={`lang-option ${i18n.language === 'ay' ? 'active' : ''}`}
            onClick={() => changeLanguage('ay')}
          >
            <span className="lang-emoji">🌄</span>
            <span className="lang-name">Aimara</span>
            {i18n.language === 'ay' && <span className="lang-check">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
