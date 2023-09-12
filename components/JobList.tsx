import { Job } from '@/types';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {
  jobs: Job[];
};

export default function JobList({ jobs }: Props) {
  return (
    <>
      {jobs.map((job) => (
        <Link
          key={job._id}
          href={`/jobs/${job.slug}`}
          className='bg-white rounded-md p-5 shadow-lg'
        >
          <div className='flex items-center text-blueColor font-bold'>
            <h2 className='flex flex-1 text-blueColor text-lg md:text-2xl font-bold'>
              {job.title}
            </h2>
            <p>${job.salary}</p>
          </div>

          <div className='flex items-center space-x-1 mt-2.5'>
            <MapPinIcon className='h-5 w-5 text-sky-500 -ml-1' />
            <p className='text-grayColor text-base md:text-lg'>
              {job.location}
            </p>
          </div>

          <div className='text-grayColor mt-2.5'>
            <p>{job.datePosted}</p>
          </div>

          <p className='text-grayColor text-base mt-2.5 !w-full md:w-3/4 leading-8'>
            {job.description}
          </p>

          <div className='flex mt-2.5'>
            <button className='rounded bg-red-500 px-5 py-2 text-white'>
              View job
            </button>
          </div>
        </Link>
      ))}
    </>
  );
}
