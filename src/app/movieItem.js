import Image from 'next/image';
import star from 'public/star.png';

export default function MovieItem({ poster, title, rating }) {
  return (
    <div className='w-36 h-80 relative bg-itemBackground rounded-2xl mr-5'>
      <Image
        src={poster}
        alt='cover'
        width={500}
        height={750}
        style={{ height: '70%', minWidth: '100%' }}
        className='rounded-2xl'
      />
      <div>
        <div className='flex pt-4 items-center'>
          <div className='px-2'>
            <Image
              src={star}
              width={17}
              height={17}
              alt='rating'
              style={{ height: '17px', width: '17px' }}
            />
          </div>
          <span>{Math.round(rating * 10) / 10}</span>
        </div>
        <h6 className='px-2 font-bold text-ellipsis font text-sm w-36 overflow-hidden'>
          {title}
        </h6>
        <div className='flex justify-center pl-2 pr-2'></div>
      </div>
    </div>
  );
}
