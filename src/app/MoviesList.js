import MovieItem from './movieItem';

export default function MoviesList({ moviesData, title }) {
  return (
    <div>
      <h1 className='text-2xl font-medium'>{title}</h1>
      <div className='flex overflow-x-auto overflow-y-hidden py-4'>
        {moviesData.map(({ id, title, vote_average, poster_path }) => {
          return (
            <MovieItem
              key={id}
              title={title}
              rating={vote_average}
              poster={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
}
