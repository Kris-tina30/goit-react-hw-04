import { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

import './App.css';
import customStyles from './components/Modal.slyle';

import ImageGallery from './components/ImageGallery';

import { searchPhoto } from './components/services/api';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn';
import ImageModal from './components/ImageModal';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);

  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function handleSearch() {
      try {
        setIsLoading(true);
        const data = await searchPhoto(query, page);

        setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
        setTotal(data.total);

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    handleSearch();
  }, [query, page]);

  const onSetPage = () => {
    setPage(prevState => prevState + 1);
  };

  const totalPage = Math.ceil(total / 12);

  const searchInput = query => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isError && <ErrorMessage />}
      <SearchBar onSubmit={searchInput} />
      {isLoading && <Loader />}

      <ImageGallery photos={photos} onImageClick={openModal} />

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
        <ImageModal imageUrl={selectedImage} />
      </Modal>
      {photos.length > 0 && page < totalPage && <LoadMoreBtn onIncrement={onSetPage} />}
    </div>
  );
}

export default App;
