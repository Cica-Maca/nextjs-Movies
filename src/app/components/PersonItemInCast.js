import Image from "next/image";
import Link from "next/link";

export default function PersonItemInCast({ id, profile, name, description }) {
  return (
    <div className='flex bg-itemBackground rounded-2xl w-full'>
      <Link href={`/person/${id}`}>
        <Image
          src={profile}
          width={68}
          height={68}
          style={{
            height: "68px",
            width: "68px",
            minHeight: "68px",
            minWidth: "68px",
          }}
          alt={`${name} photo`}
          className='rounded-lg'
        />
      </Link>
      <div>
        <Link href={`/person/${id}`}>
          <h1 className='text-md font-semibold pl-2 pt-2'>{name}</h1>
        </Link>
        <h1 className='text-sm pl-2'>{description}</h1>
      </div>
    </div>
  );
}
