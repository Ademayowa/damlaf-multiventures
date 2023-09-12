import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Search() {
  return (
    <section className='relative my-10 mx-auto flex w-11/12 flex-col justify-between rounded-lg bg-deepGray py-10 shadow-lg md:w-11/12 md:flex-row md:p-5 lg:w-8/12'>
      <div className='flex items-center space-x-2'>
        <BsSearch className='hidden h-5 w-5 text-blueColor md:block' />
        <input
          type='text'
          placeholder='Search properties'
          className='mb-4 !mr-3 h-16 w-full rounded-md border border-slate-500 bg-transparent pl-5 leading-10 text-white outline-none md:mb-0 md:h-auto md:border-none md:pl-0'
        />
      </div>

      <div className='flex items-center space-x-2 md:border-l-4 md:border-blue-200'>
        <HiOutlineLocationMarker className='ml-4 hidden h-5 w-5 text-blueColor md:block' />
        <input
          type='text'
          placeholder='city or state'
          className='mb-4 !mr-3 h-16 w-full rounded-md border border-slate-500 bg-transparent pl-5 leading-10 text-white outline-none md:mb-0 md:h-auto md:border-none md:pl-0'
        />
      </div>

      <div className='mx-2 flex flex-auto items-center md:mx-0 md:flex-none'>
        <button className='flex flex-auto justify-center rounded bg-blueColor px-5 py-4 font-bold text-white md:py-3'>
          Find properties
        </button>
      </div>
    </section>
  );
}
