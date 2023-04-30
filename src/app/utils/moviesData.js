const API_KEY = process.env.API_KEY;

async function getTrending() {
  const responseToday = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  const dataToday = await responseToday.json();
  const responseWeek = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
  );
  const dataWeek = await responseWeek.json();
  return { Today: dataToday.results, 'This Week': dataWeek.results };
}

async function getPopular() {
  const responseMovies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const dataMovies = await responseMovies.json();

  const responseTV = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const dataTV = await responseTV.json();

  return { 'In Theatres': dataMovies.results, 'On TV': dataTV.results };
}

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export { getTrending, genres, getPopular };
