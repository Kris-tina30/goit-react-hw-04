import React from 'react';


function ImageCard( {photo}) {
  return (
    <div>
      <img src={photo.urls.small} alt={photo.description} />
      
    </div>
  );
}




export default ImageCard;
