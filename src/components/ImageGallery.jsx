import React from 'react';
import ImageCard from './ImageCard';


function ImageGallery(photos) {
  return (
    <ul>
      {Array.isArray(photos) &&
        photos.map(photo => (
          <li key={photo.id}>
            <ImageCard photo={photo} />
          </li>
        ))}
    </ul>
  );
}

export default ImageGallery;


