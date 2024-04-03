import React from 'react';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchPhoto, setSearchPhoto] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (e.searchPhoto === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSubmit(searchPhoto);
    setSearchPhoto('');
  };

  return (
    <header>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button className={css.searchButton} type="submit">
          <span>
            <FcSearch className={css.icon} />
          </span>
        </button>
        <input
          className={css.searchInput}
          type="text"
          value={searchPhoto}
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setSearchPhoto(e.target.value)}
        />
      </form>
    </header>
  );
};

export default SearchBar;
