// types.d.ts

import { PortableTextBlock } from 'sanity';

type Property = {
  _id: number;
  title: string;
  location: string;
  datePosted: string;
  description: string;
  price: string;
  categories: string;
  _createdAt: Date;
  slug: string;
  mainImage: string;
  body: PortableTextBlock[];
};
