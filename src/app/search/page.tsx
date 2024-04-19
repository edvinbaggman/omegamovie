import { searchMovieByTitle } from '@/server/omdb';
import BackButton from '@/components/backButton';
import Card from '@/components/card';

interface Props {
  searchParams: searchParams;
}

export default async function Search({ searchParams }: Props) {
  const query = searchParams.q;
  const year = searchParams.y;

  if (!query) throw new Error('You need a title to search for a movie!');

  const search = await searchMovieByTitle(query, year);

  return (
    <div>
      <div className='w-full flex align-left p-2'>
        <BackButton />
      </div>
      <div className='flex flex-col items-center mt-5'>
        <div className='font-bold text-2xl'>Search results</div>
        <div className='font-bold'>Click on a movie to see more details</div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 py-5 px-2'>
        {search.map((movie) => {
          return <Card key={movie.imdbID} movie={movie} />;
        })}
      </div>
    </div>
  );
}
