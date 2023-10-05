import { groq } from 'next-sanity';
import Image from 'next/image';
import link from 'next/link';

import { PortableText } from '@portabletext/react';

import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  params: {
    slug: string;
  };
};

async function Property({ params: { slug } }: Props) {
  const query = groq`
  *[_type == "property" && slug.current == $slug][0] {
    ...,
    Agent
  }`;

  const property = await client.fetch(query, { slug });
  console.log(property);

  return (
    <>
      <div className='flex gap-5 md:flex-row flex-col justify-between my-20 px-10 relative'>
        <div className='text-white flex flex-col max-w-2xl border border-stone-800 rounded-md p-4'>
          <h2 className='text-2xl font-bold'>About Property</h2>
          <div className='mb-3 text-lg'>
            <PortableText value={property.body}></PortableText>
          </div>
        </div>

        <div className='text-white flex flex-col max-w-2xl border border-stone-800 rounded-md p-4'>
          <div className='grid place-items-center'>
            <h2 className='font-bold'>Contact Agent: Ahsan Zain Eddin</h2>
            <Image
              src={urlForImage(property.image).url()}
              alt={property.title}
              width={100}
              height={100}
              className='rounded-full mt-5'
            />

            <p className='mt-5'>Your Keys Holiday Homes</p>
            <p>Call: +971589159379</p>
            <button>Message</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;
