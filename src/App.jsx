import { useEffect, useState } from 'react';

import './App.css';
import ImageGallery from './components/ImageGallery';
// 
import { reguestPhotos, reguestPhotosByQuery } from './components/services/api';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const data = await reguestPhotos();

        setPhotos(data);

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (!query) return;

    async function fetchPhotosByQuery() {
      try {
        setIsLoading(true);
        const data = await reguestPhotosByQuery(query, page);

        setPhotos(data);

        // setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotosByQuery();
  }, [query, page]);

  const onSetSearchQuery = searchPhoto => {
    setQuery(searchPhoto);
  };

  const onSetPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <h1>Photo gallery</h1>
      {isLoading && <Loader />}

      {isError && <ErrorMessage />}

      <SearchBar onSubmit={onSetSearchQuery} />

      <LoadMoreBtn onIncrement={onSetPage} />

      <ImageGallery photos={photos} />
      {/* <ImageModal /> */}
    </div>
  );
}

export default App;
