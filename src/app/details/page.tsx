import { getMovieById, getMovieByTitle } from '@/server/omdb';
import Link from 'next/link';
import BackButton from '@/components/backButton';

interface Props {
  searchParams: searchParams;
}

export default async function Details({ searchParams }: Props) {
  const imdbID = searchParams.i;
  const title = searchParams.t;
  const year = searchParams.y;

  let movie;
  if (imdbID) movie = await getMovieById(imdbID);
  else if (title) movie = await getMovieByTitle(title, year);
  else throw new Error('You need a ID or title to get details for a movie!');

  return (
    <>
      <div className='flex flex-col gap-4 px-2 w-full max-w-screen-sm'>
        <BackButton />
        <div className='flex flex-col sm:flex-row w-full items-center sm:items-start'>
          <div className='flex-none bg-neutral-300 w-56 min-h-56 rounded-lg shadow-xl overflow-hidden'>
            {movie.Poster != 'N/A' && (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className='object-cover h-full w-full'
              />
            )}
          </div>
          <div className='flex flex-col gap-4 p-4 items-center sm:items-start'>
            <p className='text-2xl font-bold'>
              {movie.Title != 'N/A' ? movie.Title : '...'}{' '}
              {movie.Year != 'N/A' ? `(${movie.Year})` : '(...)'}
            </p>

            <p className='font-bold'>
              {movie.Runtime != 'N/A' ? movie.Runtime : '...'} |{' '}
              {movie.Genre != 'N/A' ? movie.Genre : '...'}
            </p>

            <p className='text-sm'>
              {movie.Plot != 'N/A' ? movie.Plot : '...'}
            </p>

            <div>
              Rating:{' '}
              {movie.imdbRating != 'N/A' ? `${movie.imdbRating}/10` : '...'}
              <span className='font-bold px-2'>|</span>
              <Link
                href={`https://www.imdb.com/title/${movie.imdbID}/`}
                rel='noopener noreferrer'
                target='_blank'
              >
                <button className='btn'>IMDb</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
