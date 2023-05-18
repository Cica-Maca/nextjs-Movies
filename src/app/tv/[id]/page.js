import Image from "next/image";
import Link from "next/link";
import starImage from "public/star.png";
import PersonItem from "@/app/components/PersonItem";
import { getTvData, getTvCredits, getTvVideos } from "@/app/utils/moviesData";
import Trailer from "@/app/components/Trailer";

export default async function Page({ params }) {
  const {
    poster_path,
    backdrop_path,
    name,
    first_air_date,
    genres,
    tagline,
    overview,
    vote_average,
  } = await getTvData(params.id);

  const tvVideos = await getTvVideos(params.id);
  const trailerId = tvVideos.results.find(
    (video) => video.type === "Trailer"
  ).key;

  const { crew, cast } = await getTvCredits(params.id);

  const castItems = cast
    .slice(0, 10)
    .map((person) => (
      <PersonItem
        key={person.id}
        profile={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
        name={person.name}
        character={person.character}
        id={person.id}
      />
    ));

  const director = crew.find((person) => person.job === "Director").name;

  const release_year = first_air_date.split("-")[0];

  const genresButtons = genres.map((genre, index) => (
    <Link key={genre.id} href={`/genre/${genre.id}`} className='pr-0.5'>
      {genre.name}
      {index !== genres.length - 1 ? "," : ""}
    </Link>
  ));

  return (
    <>
      <section
        style={{
          backgroundImage: `url(
            'https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces/${backdrop_path}'
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className='sm:h-fit h-full'
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
                  <h1 className='text-3xl font-bold pr-1'>{name}</h1>
                  <span className='text-3xl opacity-80'>({release_year})</span>
                </div>
                <div>
                  <span className='pr-1'>{genresButtons}</span>
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
                    <Trailer id={trailerId} />
                  </div>
                </div>
                <h1 className='italic opacity-70 pt-2'>{tagline}</h1>
                <div className='pt-2'>
                  <h1 className='text-xl font-semibold'>Overview</h1>
                  <p className='pt-1'>{overview}</p>
                </div>
                <div className='pt-16'>
                  <div>
                    <h1 className='font-semibold'>{director}</h1>
                    <h1 className='text-xs'>Director</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className='text-2xl font-medium pt-10'>Top Billed Cast</h1>
        <div className='flex overflow-x-auto overflow-y-hidden pt-6'>
          {castItems}
          <div className='w-36 min-w-max h-64 mr-5 bg-itemBackground flex items-center'>
            <Link href={`/tv/${params.id}/cast`}>View More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
