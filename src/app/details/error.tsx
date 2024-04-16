'use client';

import BackButton from '@/components/backButton';

export default function Error() {
  return (
    <>
      <div className='font-bold text-2xl pb-5'>{'Movie not found :('}</div>
      <BackButton />
    </>
  );
}
