import { getMovieData } from "@/app/utils/moviesData";
import Image from "next/image";

export default async function Page({ params }) {
  const { poster_path, title, release_date } = await getMovieData(params.id);
  const release_year = release_date.split("-")[0];
  return (
    <>
      <section className='pt-10'>
        <div className='flex'>
          <Image
            alt='Movie poster'
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            height={87}
            width={58}
          />
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold pr-2'>{title}</h1>
            <span className='text-3xl opacity-70'>({release_year})</span>
          </div>
        </div>
      </section>
    </>
  );
}
