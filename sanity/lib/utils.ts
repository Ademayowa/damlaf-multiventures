// sanity/lib/utils

import { groq } from 'next-sanity';
import { client } from './client';
import { Job } from '@/types';

//👉 Get single job
export async function getJob(slug: string): Promise<Job> {
  return client.fetch(
    groq`
    *[_type == "job" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      "slug":slug.current,
      "companyLogo": companyLogo.asset->url, 
     body
    }`,
    { slug }
  );
}
