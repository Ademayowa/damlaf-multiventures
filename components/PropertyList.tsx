import { Property } from '@/types';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  properties: Property[];
};

export default function PropertyList({ properties }: Props) {
  return (
    <>
      {properties.map((property) => (
        <Link
          href={`/properties/${property.slug}`}
          className='max-w-sm border border-stone-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
        >
          <Image
            className='rounded-t-lg'
            src={property.mainImage}
            alt={property.title}
            width={400}
            height={400}
          />

          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white'>
              ${property.price} / month
            </h5>

            <p className='mb-3 font-normal text-gray-300 dark:text-gray-400'>
              {property.title}
            </p>

            <p className='mb-3 font-normal text-gray-300 dark:text-gray-400'>
              {property.description}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}
