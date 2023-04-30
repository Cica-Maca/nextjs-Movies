'use client';

import { useState } from 'react';
import MovieItem from './movieItem';

export default function MoviesList({ movieTVData, title }) {
  const [selectedCategory, setSelectedCategory] = useState(
    movieTVData[Object.keys(movieTVData)[0]]
  );

  const [clickedButtonIndex, setClickedButtonIndex] = useState(0);

  const categories = Object.keys(movieTVData).map((timeSelector, index) => (
    <button
      key={timeSelector}
      className={`${
        clickedButtonIndex === index ? 'bg-itemBackground' : ''
      } rounded-3xl w-40 h-full`}
      onClick={() => {
        setSelectedCategory(movieTVData[timeSelector]);
        setClickedButtonIndex(index);
      }}
    >
      {timeSelector}
    </button>
  ));

  return (
    <div className='mb-8'>
      <div className='flex'>
        <h1 className='text-2xl font-medium'>{title}</h1>
        <div className='flex ml-8 border-white border-2 items-center rounded-3xl justify-evenly w-52'>
          {categories}
        </div>
      </div>
      <div className='flex overflow-x-auto overflow-y-hidden py-4'>
        {selectedCategory.map(
          ({ id, title, name, vote_average, poster_path }) => {
            return (
              <MovieItem
                key={id}
                title={title ? title : name} // TMDB has different callings for title/name of TV shows and movies
                rating={vote_average}
                poster={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
