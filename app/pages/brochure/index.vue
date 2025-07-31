<script lang="ts" setup>
// Mapping kategori berdasarkan ID
const categories = [
  { id: "1", name: 'Internet of Things' },
  { id: "2", name: 'Artificial Intelligence' },
  { id: "3", name: 'Others' },
]

// Fetch brochure
const { data: brochures } = await useAsyncData(() => {
  return queryCollection('brochure')
    .select('product', 'title', 'excerpt', 'cover_image', 'url', 'cat')
    .all()
})
console.log(brochures.value)
// Fungsi untuk dapatkan nama kategori dari ID
const getCategoryName = (id: number) => {
  return categories.find(c => c.id === id)?.name || 'Uncategorized'
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8 text-gray-800">Brochure</h1>

    <div class="grid md:grid-cols-3 gap-8">
      <article
        v-for="item in brochures"
        :key="item._id || item.url"
        class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white"
      >
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <img
            v-if="item.cover_image"
            :src="item.cover_image"
            alt="Cover"
            class="w-full h-64 object-cover"
          />
        </a>
        <div class="p-6">
          <a
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl font-semibold text-blue-600 hover:underline"
          >
            {{ item.title }}
          </a>
          <p class="text-gray-600 mt-2 text-base">
            {{ item.excerpt }}
          </p>
          <div class="mt-4 text-sm text-gray-500 flex justify-between items-center flex-wrap gap-2">
            <span class="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
              {{ getCategoryName(item.cat) }}
            </span>
            <span>{{ item.product }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
