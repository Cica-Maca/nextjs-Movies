import { getTvData, getTvCredits } from "@/app/utils/moviesData";
import Image from "next/image";
import Link from "next/link";
import PeopleItems from "@/app/components/PeopleItems";

export default async function Page({ params }) {
  const { poster_path, name, first_air_date } = await getTvData(params.id);
  const release_year = first_air_date.split("-")[0];
  const { crew, cast } = await getTvCredits(params.id);

  return (
    <>
      <section className='p-10'>
        <div className='flex bg-itemBackground rounded-xl'>
          <Link href={`/tv/${params.id}`}>
            <Image
              alt='Movie poster'
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              height={87}
              width={58}
            />
          </Link>
          <div className='flex flex-col justify-center pl-4'>
            <div className='flex'>
              <Link href={`/tv/${params.id}`}>
                <h1 className='text-3xl font-bold pr-2'>{name}</h1>
              </Link>
              <span className='text-3xl opacity-70'>({release_year})</span>
            </div>
            <Link
              href={`/tv/${params.id}`}
              className='text-lg font-semibold opacity-70'
            >
              ← Back to main
            </Link>
          </div>
        </div>
      </section>
      <section className='pt-10 sm:flex w-full px-10 sm:justify-between'>
        <div className='sm:w-5/12'>
          <h1 className='text-xl pb-4'>
            Cast <span className='opacity-70'>{cast.length}</span>
          </h1>
          <div className='w-full'>
            <PeopleItems team={cast} type='cast' />
          </div>
        </div>
        <div className='sm:w-5/12'>
          <h1 className='text-xl pb-4'>
            Crew <span className='opacity-70'>{crew.length}</span>
          </h1>
          <div className='w-full'>
            <PeopleItems team={crew} type='crew' />
          </div>
        </div>
      </section>
    </>
  );
}
