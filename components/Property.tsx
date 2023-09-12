import SectionTitle from './SectionTitle';
import { properties } from '@/constants/index';

import { ImOffice } from 'react-icons/im';
import { BsHouse } from 'react-icons/bs';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { GiGreenhouse } from 'react-icons/gi';
// import { Properties } from 'typings';

export default function Property() {
  return (
    <section className='my-20 md:mt-40'>
      <SectionTitle
        fontSize
        title='Featured Property Types'
        text='Find All Type of Properties'
        fontBold
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4'>
        <div className='mx-auto mt-10 w-11/12 rounded-lg bg-deepGray p-6 text-center shadow-lg'>
          <h3 className='my-4 grid place-items-center text-5xl text-white'>
            <ImOffice />
          </h3>

          <p className='mb-2 text-2xl font-bold text-white'>Office</p>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            800 properties
          </p>
        </div>
      </div>
    </section>
  );
}
