import ImageCard from './ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery({ photos, onImageClick }) {
  return (
    <ul className={css.galleryList}>
      {photos.map(photo => (
        <li className={css.galleryItem} key={photo.id}>
          <ImageCard photo={photo} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
