"use client";

import playButton from "public/playButton.png";
import Image from "next/image";
import { useState } from "react";

export default function Trailer({ id }) {
  const [playTrailer, setPlayTrailer] = useState(false);

  return (
    <>
      <button
        className='flex font-semibold pl-10'
        onClick={() => setPlayTrailer(true)}
      >
        <Image
          src={playButton}
          width={22}
          height={22}
          alt='play'
          className='invert'
        />{" "}
        Play Trailer
      </button>
      {playTrailer && (
        <div
          className='fixed flex justify-center items-center z-50'
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            top: "0",
            left: "0",
          }}
        >
          <div className='h-2/3 w-4/5'>
            <div className='flex justify-between bg-black h-16 items-center px-4'>
              <h1 className=' text-white text-xl'>Play Trailer</h1>
              <button onClick={() => setPlayTrailer(false)}>X</button>
            </div>
            <iframe
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            />
          </div>
        </div>
      )}
    </>
  );
}
