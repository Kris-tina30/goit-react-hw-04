import React from 'react';
import ImageCard from './ImageCard';


function ImageGallery({ photos }) {
  return (
    <ul>
      {Array.isArray(photos) &&
        photos.map(photo => (
          <li key={1}>
            <ImageCard photos={photo} />
          </li>
        ))}
    </ul>
  );
}

export default ImageGallery;


