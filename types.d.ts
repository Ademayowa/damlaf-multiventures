// types.d.ts

import { PortableTextBlock } from 'sanity';

type Property = {
  _id: number;
  title: string;
  location: string;
  datePosted: string;
  description: string;
  salary: string;
  _createdAt: Date;
  slug: string;
  companyLogo: string;
  body: PortableTextBlock[];
};
