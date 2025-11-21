import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ConnectionMonitor.css';

const ConnectionMonitor: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showOfflineNotification, setShowOfflineNotification] = useState(false);
  const [showOnlineNotification, setShowOnlineNotification] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      // No redirigir si ya estamos en una ruta offline
      if (!location.pathname.includes('offline')) {
        console.log('⚠️ Conexión perdida - Redirigiendo a modo offline');
        setShowOfflineNotification(true);
        
        setTimeout(() => {
          navigate('/inicio-offline');
          setTimeout(() => setShowOfflineNotification(false), 500);
        }, 2000); // Aumentado a 2 segundos para mejor UX
      }
    };

    const handleOnline = () => {
      // Solo redirigir al inicio si estamos en una página offline
      if (location.pathname.includes('offline')) {
        console.log('✅ Conexión restaurada - Redirigiendo al inicio');
        setShowOnlineNotification(true);
        
        setTimeout(() => {
          navigate('/'); // Redirigir a Inicio.tsx
          setTimeout(() => setShowOnlineNotification(false), 500);
        }, 2000);
      }
    };

    // Verificar estado inicial al montar el componente
    if (!navigator.onLine && !location.pathname.includes('offline')) {
      navigate('/inicio-offline');
    }

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, [navigate, location.pathname]);

  return (
    <>
      {showOfflineNotification && (
        <div className="connection-notification offline-notification">
          <div className="notification-content">
            <div className="notification-icon-wrapper">
              <span className="notification-icon">⚠️</span>
            </div>
            <div className="notification-text-container">
              <span className="notification-title">Sin conexión a internet</span>
              <span className="notification-subtitle">Redirigiendo a modo offline...</span>
              <div className="notification-progress-bar">
                <div className="notification-progress-fill"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showOnlineNotification && (
        <div className="connection-notification online-notification">
          <div className="notification-content">
            <div className="notification-icon-wrapper online">
              <span className="notification-icon">✅</span>
            </div>
            <div className="notification-text-container">
              <span className="notification-title">Conexión restaurada</span>
              <span className="notification-subtitle">Volviendo al inicio...</span>
              <div className="notification-progress-bar">
                <div className="notification-progress-fill online"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectionMonitor;