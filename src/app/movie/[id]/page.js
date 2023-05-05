import Image from 'next/image';
import Link from 'next/link';

async function getMovieData(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
}

export default async function Page({ params }) {
  const {
    poster_path,
    backdrop_path,
    title,
    release_date,
    genres,
    runtime,
    tagline,
    overview,
  } = await getMovieData(params.id);

  const release_year = release_date.split('-')[0];

  const genresButtons = genres.map((genre, index) => (
    <>
      <Link key={genre.id} href={`/genre/${genre.id}`} className='pr-0.5'>
        {genre.name}
        {index !== genres.length - 1 ? ',' : ''}
      </Link>
    </>
  ));

  const hours = Math.floor(runtime / 60);
  const remainingMinutes = runtime % 60;
  const formattedHours = hours > 0 ? hours + 'h ' : '';
  const formattedMinutes = remainingMinutes > 0 ? remainingMinutes + 'm' : '';
  const formattedRuntime = formattedHours + formattedMinutes;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(
            'https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces/${backdrop_path}'
          )`,
          height: '70%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            background:
              'linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), no-repeat',
            height: '100%',
          }}
        >
          <div className='px-6 py-10'>
            <div className='flex'>
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt='cover'
                  width={300}
                  height={450}
                />
              </div>
              <div className='pl-10'>
                <div className='flex items-center'>
                  <h1 className='text-2xl font-bold pr-1'>{title}</h1>
                  <span>({release_year})</span>
                </div>
                <div>
                  <span className='pr-1'>{release_date}</span>
                  <span className='pr-1'>{genresButtons}</span>
                  <span>{formattedRuntime}</span>
                </div>
                <h1 className='italic text-slate-400'>{tagline}</h1>
                <div>
                  <h1>Overview</h1>
                  <p>{overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
