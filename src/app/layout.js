import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Movies',
  description: 'Movies database',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`bg-default text-white font-inter text-base antialiased font-feature-default`}
      >
        <header>
          <nav className='flex justify-between w-full'>
            <Link href='/' className='text-base md:text-3xl font-bold'>
              MovieDB
            </Link>
          </nav>
        </header>
        <main className='p-6 xl:px-40'>{children}</main>
        <footer>
          <nav className='flex justify-around fixed bottom-0 w-full z-40'>
            <Link href='/trending'>Trending</Link>
            <Link href='/'>Home</Link>
            <Link href='/top'>Categories</Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
