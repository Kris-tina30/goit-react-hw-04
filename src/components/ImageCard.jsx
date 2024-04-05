import React from 'react';
import css from './ImageCard.module.css';

function ImageCard({ photo, onImageClick }) {
  return (
    <div>
      <img
        onClick={() => onImageClick(photo.urls.regular, photo.description)}
        className={css.image}
        src={photo.urls.small}
        alt={photo.description}
      />
    </div>
  );
}

export default ImageCard;
