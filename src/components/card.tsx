import Link from 'next/link';

interface Props {
  movie: MovieSimple;
}

const Card = ({ movie }: Props) => {
  return (
    <Link href={`/details?i=${movie.imdbID}`}>
      <div className='max-w-96 sm:w-52 border shadow-lg rounded sm:hover:scale-105 duration-300 bg-neutral-100'>
        <div className='h-96 sm:h-60 bg-neutral-300 shadow rounded-t overflow-hidden'>
          {movie.Poster != 'N/A' && (
            <img
              className='object-cover h-full w-full'
              src={movie.Poster != 'N/A' ? movie.Poster : ''}
              alt={movie.Title}
            />
          )}
        </div>
        <div className='h-36 font-bold p-3 flex flex-col justify-between'>
          <h2 className='max-h-24 overflow-hidden'>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
