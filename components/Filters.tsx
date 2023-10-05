'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { formUrlQuery } from '@/sanity/schemas/utils';

const links = ['All', 'Buying', 'Renting', 'Selling'];

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';

    if (active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        // when you click a category button that's active, this removes/clears the category & also clear the URL
        keysToRemove: ['category'],
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <ul className='text-white no-scrollbar text-lg font-semibold flex justify-center w-full mx-auto overflow-auto py-5'>
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? 'bg-blueColor' : ''
          } whitespace-nowrap rounded-md px-8 py-2 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
