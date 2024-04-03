import React from 'react';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onIncrement }) => {
  return (
    <div>
      <button className={css.loadMoreBtn} type="button" onClick={() => onIncrement()}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
