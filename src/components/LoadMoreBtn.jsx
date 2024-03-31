import React from 'react';

const LoadMoreBtn = ({ onIncrement }) => {
  const handleLoadMore = () => {
    onIncrement();
  };
  return (
    <div>
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

