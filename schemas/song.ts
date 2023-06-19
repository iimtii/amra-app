import { defineField, defineType } from 'sanity'

import authorType from './author'

export default defineType({
    name: 'song',
    title: 'Song',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: authorType.name }],
      }),
    ],
  })