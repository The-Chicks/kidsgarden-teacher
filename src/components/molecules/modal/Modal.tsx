import React from 'react';
import styles from './Modal.module.css';

type Props = {
  type: 'A' | 'B' | 'C';
  children: React.ReactNode;
  closeModal: () => void;
  width: string;
  height: string;
};
// type A: with Cross Button
// type B: with Orange 확인 Button
// type C: width Croos Button and Scroll

const Modal = ({ type, children, closeModal, width, height }: Props) => {
  return (
    <div className={`${styles.modalBackground}`} onClick={closeModal}>
      <div
        className={`${styles.modalBox} ${
          type === 'A'
            ? styles.modalBoxA
            : type === 'B'
            ? styles.modalBoxB
            : styles.modalBoxC
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ width: width, height: height }}
      >
        {type !== 'B' && (
          <button className={`${styles.modalCloseButton}`} onClick={closeModal}>
            <img
              src={'/icons/close.svg'}
              width={'30px'}
              height={'30px'}
              alt="menu"
            />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
