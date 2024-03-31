import React from 'react';

import toast from 'react-hot-toast';

const FORM_INITIAL_VALUES = {
  searchPhoto: '',
};

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = values => {
    if (values.searchPhoto.trim() === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSubmit(values.searchPhoto);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} initialvalues={FORM_INITIAL_VALUES}>
        <input
          type="text"
          name="searchPhoto"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
