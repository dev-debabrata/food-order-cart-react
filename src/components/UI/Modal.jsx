import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`bg-[#e4ddd4] rounded-md shadow-lg p-4 w-[80%] max-w-2xl mx-auto mt-10 animate-fade-slide-up ${className}`}
      onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
