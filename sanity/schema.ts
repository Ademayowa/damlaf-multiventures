// sanity/schema.ts

import { type SchemaTypeDefinition } from 'sanity';
import job from './schemas/job';
import blockContent from './schemas/blockContent';
import postedBy from './schemas/postedBy';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, blockContent, postedBy],
};
