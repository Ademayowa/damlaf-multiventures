// app/jobs/[job]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { getJob } from '@/sanity/lib/utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: {
    job: string;
  };
};

export default async function JobDetails({ params }: Props) {
  const slug = params.job;
  const job = await getJob(slug);

  return (
    <>
      <div className='my-10 mx-auto max-w-3xl'>
        <Link href='/' className='text-xl'>
          Back to home
        </Link>
      </div>

      <div className='p-5 mx-auto max-w-3xl'>
        <h5 className='mb-2 text-2xl font-bold'>{job.title}</h5>
        <div className='mb-3 text-lg'>
          <PortableText value={job.body}></PortableText>
        </div>
      </div>
    </>
  );
}
