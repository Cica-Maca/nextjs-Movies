'use client';

import MoviesList from './MoviesList';

export default function ItemsBox({ title }) {
  const [mediaType, setMediaType] = useState('');
  return (
    <>
      <h1 className='text-2xl font-medium'>{title}</h1>
    </>
  );
}
