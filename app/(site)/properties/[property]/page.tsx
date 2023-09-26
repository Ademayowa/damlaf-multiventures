// app/jobs/[job]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
// import { getJob } from '@/sanity/lib/utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: {
    job: string;
  };
};

export default async function JobDetails({ params }: Props) {
  const slug = params.job;
  // const job = await getJob(slug);

  return (
    <>
      <div className='m-10 max-w-3xl'>
        <Link href='/' className='text-xl text-white'>
          Back to home
        </Link>
      </div>

      <div className='flex gap-5 md:flex-row flex-col justify-between my-10 px-10 relative'>
        <div className='text-white flex flex-col max-w-2xl border border-stone-800 rounded-md p-4'>
          <h2 className='text-2xl font-bold'>About Property</h2>
          <p className='mt-5'>
            Your Keys Holiday Homes would like to present to you a beautiful and
            cozy 1 bedroom apartment with wifi in the heart of Jumeirah Village
            Circle, Dubai.Zayed and the EmiratesRoad, Jumeirah Village Circle
            boasts a promising location just in the heart of Dubai with its lush
            landscaping, water areas, parks and green features Jumeirah Village
            Circle are of most demand in the whole development. 17 mins drive to
            the beach/Dubai Marina 20 mins drive to Downtown/Dubai Mall Pharmacy
            and grocery store
          </p>
        </div>

        <div className='text-white flex flex-col max-w-2xl border border-stone-800 rounded-md p-4'>
          <div className='grid place-items-center'>
            <h2 className='font-bold'>Contact Agent: Ahsan Zain Eddin</h2>
            <Image
              src='/agent.png'
              height={100}
              width={100}
              alt='agent-img'
              className='rounded-full mt-5'
            />

            <p className='mt-5'>Your Keys Holiday Homes</p>
            <p>Call: +971589159379</p>
            <button>Message</button>
          </div>
        </div>
      </div>

      {/* <div className='p-5 mx-auto max-w-3xl'>
        <h5 className='mb-2 text-2xl font-bold text-white'>property title</h5>
        <div className='mb-3 text-lg'>
          <PortableText value={job.body}></PortableText>
        </div>
      </div> */}
    </>
  );
}
