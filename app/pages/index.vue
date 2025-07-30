<script lang="ts" setup>
const { data: posts } = await useAsyncData(() => {
  return queryCollection('blog')
    .select('title', 'excerpt', 'cover_image', 'path', 'id', 'date', 'author', 'category')
    .order('date', 'DESC')
    .all()
})

const { data: tes } = await useAsyncData(() => {
  return queryCollection('blog').all()
})

console.log(tes.value)

</script>

<template>
  <section class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8 text-gray-800">Blog</h1>

    <div class="space-y-8">
      <article
        v-for="post in posts"
        :key="post.id"
        class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white"
      >
        <nuxt-link :to="post.path">
          <img
            v-if="post.cover_image"
            :src="post.cover_image"
            alt="Cover"
            class="w-full h-64 object-cover"
          />
        </nuxt-link>
        <div class="p-6">
          <nuxt-link
            :to="post.path"
            class="text-2xl font-semibold text-blue-600 hover:underline"
          >
            {{ post.title }}
          </nuxt-link>
          <p class="text-gray-600 mt-2 text-base">
            {{ post.excerpt }}
          </p>
          <div class="mt-4 text-sm text-gray-500 flex justify-between items-center flex-wrap gap-2">
            <span>{{ new Date(post.date).toLocaleDateString() }}</span>
            <span>By {{ post.author }}</span>
            <span class="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
              {{ post.category }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
