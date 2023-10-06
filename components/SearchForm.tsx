'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery } from '@/sanity/schemas/utils';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search,
        });
        // clear query in the URL
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query'],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div className='flex flex-1 items-center space-x-2'>
      <HiOutlineLocationMarker className='ml-4 hidden h-5 w-5 text-blueColor md:block' />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search for rent, buy or sell properties'
        className='mb-4 !mr-3 h-16 w-full rounded-md border border-slate-500 bg-transparent pl-5 leading-10 text-white outline-none md:mb-0 md:h-auto md:border-none md:pl-0'
      />
    </div>
  );
}
