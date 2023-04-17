import MovieItem from './movieItem';

export default function MoviesList({ moviesData, title }) {
  return (
    <div>
      <h1 className='text-2xl font-medium'>{title}</h1>
      <div className='flex overflow-x-auto overflow-y-hidden py-4'>
        {moviesData.map(({ id, title, name, vote_average, poster_path }) => {
          return (
            <MovieItem
              key={id}
              title={title ? title : name} // TMDB has different callings for title/name of TV shows and movies
              rating={vote_average}
              poster={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
}
