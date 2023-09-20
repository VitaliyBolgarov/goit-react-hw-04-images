import { useEffect } from 'react';
import './Modal.css';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">{children}</div>
    </div>
  );
};
