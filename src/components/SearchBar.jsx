import React from 'react';

function SearchBar({}) {
  return (
    <header>
      <form>
        <input type="text" autocomplete="off" autofocus placeholder="Search images and photos" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;