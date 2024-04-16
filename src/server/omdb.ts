import 'server-only';

// The Open Movie Database
// https://www.omdbapi.com/

// Send requests to http://www.omdbapi.com/?apikey=[yourkey]&...
// Parameters used:
// i = A valid IMDb ID (e.g. tt1285016).
// y = Year of release.
// t = Movie title to search for. (Get one result)
// s = Movie title to search for. (Get multiple results)

const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&`;

// Takes IMDb ID and returns json of movie, if exists
export async function getMovieById(imdbID: string) {
  const res = await fetch(`${baseUrl}i=${imdbID}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movie :(');
  }

  const data = await res.json();

  if (!(data.Response === 'True')) {
    throw new Error('Incorrect IMDb ID :(');
  }

  return data as Movie;
}

// Takes title and year(optional) and returns json of movie, if exists
export async function getMovieByTitle(
  title: string,
  year: string | undefined = undefined
) {
  let fetchUrl = `${baseUrl}t=${title}`;

  if (year) fetchUrl = `${fetchUrl}&y=${year}`;

  const res = await fetch(fetchUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movie :(');
  }

  const data = await res.json();

  if (!(data.Response === 'True')) {
    throw new Error('Movie not found! :(');
  }

  return data as Movie;
}

// Takes title and year(optional) and returns array of movies, if any is found
export async function searchMovieByTitle(
  title: string,
  year: string | undefined
) {
  let fetchUrl = `${baseUrl}s=${title}`;

  if (year) fetchUrl = `${fetchUrl}&y=${year}`;

  const res = await fetch(fetchUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movie :(');
  }

  const data = await res.json();

  if (!(data.Response === 'True')) {
    throw new Error('Movie not found! :(');
  }

  const searchResults = data.Search;

  return searchResults as MovieSimple[];
}
