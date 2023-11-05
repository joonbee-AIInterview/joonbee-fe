import React, { useState, useRef, useEffect } from 'react';

const useModalOutsideClick = () => {
  const [isOpened, setIsOpened] = useState(false);
  const modalRef = useRef<HTMLUListElement | null>(null);

  // console.log(modalRef.current);

  const toggleModal = () => {
    setIsOpened(prev => !prev);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    console.log(e);
    console.log(modalRef.current);
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return { isOpened, toggleModal, closeModal, modalRef };
};

export default useModalOutsideClick;
