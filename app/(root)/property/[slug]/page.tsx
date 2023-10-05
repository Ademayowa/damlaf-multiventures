import { groq } from 'next-sanity';
import Image from 'next/image';
import link from 'next/link';

import { PortableText } from '@portabletext/react';

import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import EnquiryForm from '@/components/EnquiryForm';

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

  return (
    <>
      <div className='flex gap-14 md:flex-row flex-col justify-between my-10 px-5 md:px-20 relative'>
        <div className='flex flex-col w-full lg:w-3/5 rounded-md'>
          <Image
            src={urlForImage(property.image).url()}
            alt={property.title}
            width={1000}
            height={1000}
            className='rounded-md'
          />

          <div className='text-white'>
            <h2 className='mt-8 font-normal'>For Rent</h2>
            <h3 className='text-[32px] font-bold text-[#8391A6] my-3'>
              $ 1,800 <span className='text-base font-normal'>/month</span>
            </h3>

            <div className='flex space-x-9 my-3'>
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

            <p className='text-xl tracking-wider'>
              Talbot Mobile Home Ave Unit C13, Canutillo, TX 79835
            </p>
          </div>
        </div>

        <div className='text-white flex flex-col w-full rounded-md lg:w-2/5'>
          <EnquiryForm />
        </div>
      </div>
    </>
  );
}

export default Property;
