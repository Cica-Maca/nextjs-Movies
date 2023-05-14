import Image from "next/image";
import Link from "next/link";
import starImage from "public/star.png";

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
    vote_average,
  } = await getMovieData(params.id);

  const release_year = release_date.split("-")[0];

  const genresButtons = genres.map((genre, index) => (
    <Link key={genre.id} href={`/genre/${genre.id}`} className='pr-0.5'>
      {genre.name}
      {index !== genres.length - 1 ? "," : ""}
    </Link>
  ));

  const hours = Math.floor(runtime / 60);
  const remainingMinutes = runtime % 60;
  const formattedHours = hours > 0 ? hours + "h " : "";
  const formattedMinutes = remainingMinutes > 0 ? remainingMinutes + "m" : "";
  const formattedRuntime = formattedHours + formattedMinutes;

  const formatedRelease = release_date.split("-").join("/");

  return (
    <>
      <div
        style={{
          backgroundImage: `url(
            'https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces/${backdrop_path}'
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className='sm:h-3/4 h-full'
      >
        <div
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), no-repeat",
            height: "100%",
          }}
        >
          <div className='px-6 py-10'>
            <div className='sm:flex'>
              <div className='pl-10'>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt='cover'
                  width={300}
                  height={450}
                  className='h-72 w-56 sm:h-full sm:w-full'
                />
              </div>
              <div className='pl-10 pt-10'>
                <div className='flex items-center'>
                  <h1 className='text-3xl font-bold pr-1'>{title}</h1>
                  <span className='text-3xl opacity-80'>({release_year})</span>
                </div>
                <div>
                  <span className='pr-1 font-light'>{formatedRelease} •</span>
                  <span className='pr-1'>{genresButtons} •</span>
                  <span>{formattedRuntime}</span>
                </div>
                <div className='pt-2'>
                  <div className='flex items-center'>
                    <Image
                      src={starImage}
                      alt='Star rating'
                      height={20}
                      width={20}
                    />
                    <span className='font-semibold text-lg pl-1'>
                      {vote_average.toFixed(1)}
                    </span>
                    <span className='text-slate-300'>/10</span>
                  </div>
                </div>
                <h1 className='italic opacity-70 pt-2'>{tagline}</h1>
                <div className='pt-2'>
                  <h1 className='text-xl font-semibold'>Overview</h1>
                  <p className='pt-1'>{overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
