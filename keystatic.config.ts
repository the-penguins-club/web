import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    blog: collection({
      label: 'Blog posts',
      path: 'src/content/blog/*',
      slugField: 'title',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        author: fields.text({ label: 'Author', defaultValue: 'The Penguins Club' }),
        summary: fields.text({ label: 'Summary', multiline: true, validation: { isRequired: true } }),
        cover: fields.text({ label: 'Cover image path' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: p => p.value }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.mdx({ label: 'Content', extension: 'md' })
      }
    })
  }
});
