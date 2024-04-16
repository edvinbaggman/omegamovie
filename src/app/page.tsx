import SearchMovieForm from '@/components/forms/searchMovieForm';

export default async function Home() {
  return (
    <>
      <div className='font-bold text-5xl sm:text-6xl pb-8'>OmegaMovie</div>
      <SearchMovieForm />
    </>
  );
}
