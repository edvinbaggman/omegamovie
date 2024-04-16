'use client';

import BackButton from '@/components/backButton';

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  return (
    <>
      <div className='font-bold text-2xl'>Something went wrong...</div>
      <div className='font-bold pb-5'>{error.message}</div>
      <BackButton />
    </>
  );
}
