import Image from "next/image";

export default function PersonItem({ profile, name, character }) {
  return (
    <div className='w-36 h-64 relative mr-5 bg-itemBackground rounded-2xl'>
      <Image
        src={profile}
        width={138}
        height={175}
        alt='profile photo'
        style={{
          height: "175px",
          width: "138px",
          minHeight: "175px",
          minWidth: "138px",
        }}
        className='rounded-2xl'
      />
      <h1 className='text-md font-semibold pl-2 pt-2'>{name}</h1>
      <h1 className='text-sm pl-2'>{character}</h1>
    </div>
  );
}
