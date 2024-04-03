import React from 'react';
import css from './ImageCard.module.css';

function ImageCard({ photo, onImageClick }) {
  return (
    <div onClick={() => onImageClick(photo.urls.regular, photo.description)}>
      <img className={css.image} src={photo.urls.small} alt={photo.description} />
    </div>
  );
}

export default ImageCard;
