import { type SchemaTypeDefinition } from 'sanity';
import property from './schemas/property';
import agent from './schemas/agent';
import blockContent from './schemas/blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property, agent, blockContent],
};
