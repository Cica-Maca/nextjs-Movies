import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Movies",
  description: "Movies database",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`bg-default text-white font-inter text-base antialiased font-feature-default h-full`}
      >
        <header>
          <nav className='flex justify-between w-full'>
            <Link href='/' className='text-base md:text-3xl font-bold'>
              MovieDB
            </Link>
          </nav>
        </header>
        <main className='max-w-screen-2xl h-full m-auto'>{children}</main>
      </body>
    </html>
  );
}
