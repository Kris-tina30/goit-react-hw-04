import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, onClose  }) => {
  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ImageModal;
