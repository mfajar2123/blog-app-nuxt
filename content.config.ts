import { defineCollection, defineContentConfig, z } from '@nuxt/content'

console.log('Content config loaded') // <- tambahkan ini

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        excerpt: z.string().optional().default(''),
        cover_image: z.string().optional(),
        date: z.string(),
        author: z.string().optional(),
        category: z.enum(['news', 'article']).optional(),
      }),
    }),
  },
})
