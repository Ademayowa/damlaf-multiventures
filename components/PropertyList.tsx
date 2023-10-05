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
          className='rounded-t-lg'
          src={image}
          alt={title}
          width={400}
          height={400}
        />

        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white line-clamp-1'>
            {title}
          </h5>

          <div className='flex space-x-3 items-center'>
            <p className='font-normal text-gray-300 dark:text-gray-400'>
              $ {price}
            </p>
          </div>
        </div>
      </ClientSideRoute>
    </>
  );
}
