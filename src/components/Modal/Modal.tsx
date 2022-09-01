// import React, { Component } from 'react';
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.getElementById("modal-root") as HTMLDivElement;

interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    const handleBackdropClick = (event: MouseEvent): void => {
      const target = event.target as HTMLDivElement;

      if (target.nodeName !== "IMG") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleBackdropClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleBackdropClick);
    };
  }, [onClose]);

  return createPortal(
    <Backdrop>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};
