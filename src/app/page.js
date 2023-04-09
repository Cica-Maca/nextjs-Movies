import MovieItem from './movieItem';
import { getTrendingMovies } from './utils/getTrendingMovies';
import Link from 'next/link';
import Image from 'next/image';
import popcornVector from 'public/popcornVector.png';
import { genres } from './utils/getTrendingMovies';

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  const genresButtons = genres.map(({ id, name }) => (
    <Link
      href={`/genre/${id}`}
      key={id}
      className='rounded-xl bg-itemBackground h-8 w-20 flex justify-center items-center text-xs m-1'
    >
      {name}
    </Link>
  ));

  const trendingMoviesElements = trendingMovies.map(
    ({ id, title, vote_average, poster_path }) => (
      <MovieItem
        key={id}
        title={title}
        rating={vote_average}
        poster={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
    )
  );

  return (
    <>
      <div className='h-80 flex items-center '>
        <div className='w-full'>
          <div className='flex'>
            <div>
              <h1 className='font-bold text-5xl'>Welcome.</h1>
              <h1 className='text-4xl font-semibold pb-12'>
                Millions of movies to discover. Explore now.
              </h1>
            </div>
            <div>
              <Image
                src={popcornVector}
                alt='Popcorn vector'
                width={100}
                height={100}
                className='pb-4'
              />
            </div>
          </div>
          <form className='w-full relative'>
            <input
              type='text'
              className='w-full h-12 leading-10 border-none rounded-3xl px-6 text-black'
              placeholder='Search for a movie...'
              autoComplete='off'
              spellCheck='false'
            />
            <input
              type='submit'
              value='Search'
              className='absolute top-0 -right-1 inline-flex h-12 border-none rounded-3xl bg-itemBackground font-bold px-6 cursor-pointer'
            />
          </form>
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center '>
        {genresButtons}
      </div>
      <div>
        <h1 className='text-2xl font-semibold'>Trending</h1>
        <div className='flex overflow-x-auto overflow-y-hidden py-4'>
          {trendingMoviesElements}
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
}
