import { useEffect, useState } from 'react';

import './App.css';
import ImageGallery from './components/ImageGallery';
//reguestPhotos,
import { searchPhoto } from './components/services/api';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   async function fetchPhotos() {
  //     try {
  //       setIsLoading(true);
  //       const data = await reguestPhotos();

  //       setPhotos(data);

  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchPhotos();
  // }, []);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function handleSearch() {
      try {
        setIsLoading(true);
        const data = await searchPhoto(query, page);

        setPhotos(data);

        // setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    handleSearch();
  }, [query, page]);

  const onSetPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const searchInput = query => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
  };
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Photo gallery</h1>
      <SearchBar onSubmit={searchInput} />
      {isLoading && <Loader />} {isError && <ErrorMessage />}
      <ImageGallery photos={photos} />
      <LoadMoreBtn onIncrement={onSetPage} />
      {/* <ImageModal onClick={openModal} isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
}

export default App;
