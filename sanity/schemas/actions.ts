import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { buildQuery } from './utils';

interface GetPropertiesParams {
  query: string;
  category: string;
  page: string;
}

export const getProperties = async (params: GetPropertiesParams) => {
  const { query, category, page } = params;

  try {
    const properties = await client.fetch(
      groq`${buildQuery({
        type: 'property',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        price,
        agent,
        description,
        "image": image.asset->url,
        slug,
        category
      }`
    );

    return properties;
  } catch (error) {
    console.log(error);
  }
};
