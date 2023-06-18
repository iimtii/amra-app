import { defineField, defineType } from 'sanity'

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
    ],
  })