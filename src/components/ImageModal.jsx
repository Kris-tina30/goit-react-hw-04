import React from 'react';
import Modal from 'react-modal';
import customStyles from './Modal.slyle';

const ImageModal = ({ imageUrl, isOpen, onRequestClose }) => {
  if (!imageUrl) {
    return null;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <img src={imageUrl} alt="Large" />
    </Modal>
  );
};

export default ImageModal;
