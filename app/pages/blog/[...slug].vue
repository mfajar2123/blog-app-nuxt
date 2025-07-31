<script lang="ts" setup>
const route = useRoute()
const pageId = computed(() => 'blog-' + route.path)

const { data: post } = await useAsyncData(pageId, () => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-12">
    <nuxt-link to="/blog" class="text-sm text-blue-600 hover:underline mb-6 inline-block">
      « Back
    </nuxt-link>

    <div v-if="post">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">
        {{ post.title }}
      </h1>
      <ContentRenderer :value="post" class="prose prose-lg max-w-none text-justify" />
    </div>
    <div v-else class="text-gray-500 ">Loading...</div>
  </section>
</template>
