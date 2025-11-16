import React, { useState, useEffect, useRef } from 'react';
import './ThemeSelector.css';

type Theme = 'light' | 'dark' | 'colorblind';

const ThemeSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const applyTheme = (theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    setIsOpen(false);
  };

  const getThemeInfo = (theme: Theme) => {
    const themes = {
      light: { icon: '☀️', name: 'Claro' },
      dark: { icon: '🌙', name: 'Oscuro' },
      colorblind: { icon: '👁️', name: 'Daltónico' }
    };
    return themes[theme];
  };

  const currentInfo = getThemeInfo(currentTheme);

  return (
    <div className="theme-selector" ref={dropdownRef}>
      <button
        className="theme-btn-dropdown"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selector de tema"
      >
        <span className="theme-icon">{currentInfo.icon}</span>
        <span className="theme-arrow">▼</span>
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          <button
            className={`theme-option ${currentTheme === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeChange('light')}
          >
            <span className="theme-option-icon">☀️</span>
            <span className="theme-option-name">Claro</span>
            {currentTheme === 'light' && <span className="theme-check">✓</span>}
          </button>

          <button
            className={`theme-option ${currentTheme === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeChange('dark')}
          >
            <span className="theme-option-icon">🌙</span>
            <span className="theme-option-name">Oscuro</span>
            {currentTheme === 'dark' && <span className="theme-check">✓</span>}
          </button>

          <button
            className={`theme-option ${currentTheme === 'colorblind' ? 'active' : ''}`}
            onClick={() => handleThemeChange('colorblind')}
          >
            <span className="theme-option-icon">👁️</span>
            <span className="theme-option-name">Daltónico</span>
            {currentTheme === 'colorblind' && <span className="theme-check">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
