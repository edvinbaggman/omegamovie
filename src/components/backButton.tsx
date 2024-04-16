'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button className='btn w-24' onClick={() => router.back()}>
      Go back
    </button>
  );
};

export default BackButton;
