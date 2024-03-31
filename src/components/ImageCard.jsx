import React from 'react';

function ImageCard({ photo }) {
  return (
    <div>
      <img src={photo.urls.thumb} alt={photo.description} />
      <p>{photo.description}</p>
    </div>
  );
}

export default ImageCard;
