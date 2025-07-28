<script lang="ts" setup>
const { data: posts } = await useAsyncData(() => {
  return queryCollection('blog')
    .select('title', 'description', 'path', 'id', 'date')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8 text-gray-800">Blog</h1>

    <div class="space-y-6">
      <article
        v-for="post in posts"
        :key="post.id"
        class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
      >
        <nuxt-link
          :to="post.path"
          class="text-xl font-semibold text-blue-600 hover:underline"
        >
          {{ post.title }}
        </nuxt-link>
        <p class="text-gray-600 mt-2 text-base">{{ post.description }}</p>
        <p class="text-gray-600 mt-2 text-xs">{{ post.date }}</p>
      </article>
    </div>
  </section>
</template>
