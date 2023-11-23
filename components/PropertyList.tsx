import Link from 'next/link';
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  title: string;
  image: string;
  slug: string;
  price: string;
};

export default function PropertyList({ title, image, slug, price }: Props) {
  return (
    <>
      <ClientSideRoute key={title} route={`/property/${slug}`}>
        <Image
          className='rounded-t-lg transform hover:scale-105 transition duration-300'
          src={image}
          alt={title}
          width={400}
          height={400}
        />

        <div className='py-5 tracking-wide'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white line-clamp-1'>
            {title}
          </h5>

          <div className='flex space-x-9 my-3 text-gray-300'>
            <p className='font-bold'>
              3 <span className='font-normal ml-1'>bed</span>
            </p>
            <p className='font-bold'>
              2<span className='font-normal ml-1'> bath</span>
            </p>
            <p className='font-bold'>
              1,266
              <span className='font-normal ml-1'>sqft</span>
            </p>
          </div>

          {/* <div className='flex space-x-3 items-center'>
            <p className='font-normal text-gray-300 dark:text-gray-400 text-lg'>
              property features
            </p>
          </div> */}

          <div className='flex space-x-3 items-center mt-3'>
            <p className='font-normal text-gray-300 dark:text-gray-400 text-lg'>
              $ {price}
            </p>
          </div>
        </div>
      </ClientSideRoute>
    </>
  );
}
