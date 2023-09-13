import { defineField, defineType } from 'sanity';
import { SearchIcon } from '@sanity/icons';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
