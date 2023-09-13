import { type SchemaTypeDefinition } from 'sanity';
import rent from './schemas/rent';
import buy from './schemas/buy';
import author from './schemas/author';
import category from './schemas/category';
import blockContent from './schemas/blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [rent, blockContent, buy, author, category],
};
