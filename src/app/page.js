import { getTrending, genres, getPopular } from './utils/moviesData';
import Link from 'next/link';
import Image from 'next/image';
import popcornVector from 'public/popcornVector.png';
import MoviesList from './MoviesList';

export default async function Home() {
  const trending = await getTrending();
  const popular = await getPopular();

  const genresButtons = genres.map(({ id, name }) => (
    <Link
      href={`/genre/${id}`}
      key={id}
      className='rounded-xl bg-itemBackground h-8 w-20 flex justify-center items-center text-xs m-1'
    >
      {name}
    </Link>
  ));

  return (
    <>
      <div className='h-80 flex items-center '>
        <div className='w-full'>
          <div className='flex'>
            <div>
              <h1 className='font-bold text-5xl'>Welcome.</h1>
              <h1 className='text-3xl font-semibold pb-12'>
                Millions of movies to discover, TV shows and people to discover.
                Explore now.
              </h1>
            </div>
            <div className='relative h-24 w-14'>
              <Image
                src={popcornVector}
                alt='Popcorn vector'
                fill
                sizes='50vw'
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

      <MoviesList movieTVData={trending} title='Trending' />

      <MoviesList movieTVData={popular} title="What's Pupular" />
    </>
  );
}
