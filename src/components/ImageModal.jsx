import React from 'react';

const ImageModal = ({ imageUrl }) => {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="Large" width="800" height="600" />
      </div>
    </div>
  );
};

export default ImageModal;
