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
    <>
      <div className='w-full flex align-left pt-2 px-2 sm:px-10'>
        <BackButton />
      </div>
      <div className='font-bold text-2xl'>Search results</div>
      <div className='font-bold'>Click on a movie to see more details</div>
      <div className='max-w-full sm:px-10'>
        <div className='flex flex-col sm:flex-row overflow-x-scroll gap-2 pt-5 pb-10 sm:px-5'>
          {search.map((movie) => {
            return <Card key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
