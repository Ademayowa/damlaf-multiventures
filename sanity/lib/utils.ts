// sanity/lib/utils

import { groq } from 'next-sanity';
import { client } from './client';
import { Property } from '@/types';

//👉 Fetch all properties
export async function getProperties(): Promise<Property[]> {
  return client.fetch(
    groq`
    *[_type in ["rent", "buy"]] {
      _id,
      _createdAt,
      title,
      price,
      categories,
      description,
      "slug":slug.current,
      "mainImage": mainImage.asset->url, 
      body
    }
    `
  );
}

//👉 Get single job
export async function getProperty(slug: string): Promise<Property> {
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
