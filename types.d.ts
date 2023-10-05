import { PortableTextBlock, Slug } from 'sanity';

type Base = {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
};

interface Property extends Base {
  title: string;
  description: string;
  price: string;
  image: string;
  publishedAt: string;
  agent: Agent;
  slug: Slug;
  body: PortableTextBlock[];
  categories: Category[];
}

interface Category extends Base {
  title: string;
  description: string;
}

interface Agent extends Base {
  name: string;
  slug: Slug;
  image: image;
  bio: PortableTextBlock[];
}

interface Slug {
  _type: 'slug';
  current: string;
}

// interface Image {
//   _type: 'image';
//   asset: Reference;
// }

interface Reference {
  _ref: string;
  _type: 'reference';
}
// type Property = {
//   _id: number;
//   title: string;
//   publishedAt: string;
//   description: string;
//   price: string;
//   category: string;
//   _createdAt: Date;
//   slug: {
//     current: string;
//   };
//   image: string;
//   body: PortableTextBlock[];
// };
