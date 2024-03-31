import React from 'react';
import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPhoto}
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setSearchPhoto(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
