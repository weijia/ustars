<script setup lang="ts">
import Fuse from 'fuse.js'

const allStars = inject('allStars')
const searchQuery = ref('')
const fuse = new Fuse(allStars.value, {
  keys: [
    { name: 'name', weight: 1 },
    { name: 'description', weight: 0.8 },
    { name: 'language', weight: 0.6 }
  ],
  threshold: 0.4,
  includeScore: true
})

// 计算过滤后的结果
const searchResults = computed(() => {
  if (!searchQuery.value || !fuse) {
    return allStars.value;
  }

  const results = fuse.search(searchQuery.value)
  return results
    .filter(result => result.score && result.score < 0.4)
    .map(result => result.item)
    .slice(0, 10)
})

const openStarPage = (url: string) => {
  window.open(url)
}

const getMyStars = () => {
  window.open('https://github.com/xiaoxiunique/ustars')
}
</script>

<template>
  <div
    class="sticky top-0 z-10 flex flex-row my-4 justify-between items-center py-3.5 px-4  bg-white/40 backdrop-blur-md rounded-2xl">
    <div class="flex items-center justify-center">
      <a href="/" class="flex items-center"><span class="text-2xl font-serif text-black">U Stars</span></a>
    </div>
    <div class="items-center min-w-96 md:flex hidden">
      <input placeholder="Search Github Name Or Description"
        class="text-sm w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
        type="text" v-model="searchQuery">
    </div>
    <div class="flex items-center lg:gap-4 gap-2">
      <Button @click="getMyStars">
        Get U Stars
      </Button>
    </div>
  </div>
  <div class="text-center my-4 text-gray-600 text-lg font-light">
    Discover and organize your GitHub stars with ease
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="star in searchResults" :key="star.id"
      class="rounded-md p-2 sm:p-4 hover:p-3 flex flex-col border border-gray-200 hover:bg-white/80 hover:border transition-all duration-200 ease-in-out relative cursor-pointer bg-white/40"
      @click="openStarPage(star.html_url)">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-md font-medium">{{ star.name }}</span>
        </div>
        <div class="text-sm text-gray-500">{{ star.stargazers_count }}</div>
      </div>

      <div class="text-sm text-gray-500 mt-2 line-clamp-2 min-h-10">{{ star.description }}</div>

      <div class="flex items-center justify-end mt-2">
        <div class="text-sm text-gray-500">{{ star.language }}</div>
      </div>

      <!-- star chart -->
      <!-- <div class="flex items-center justify-center">
        <img :src="`https://starchart.cc/${star.full_name}.svg`" alt="star chart" class="w-full h-full">
      </div> -->
    </div>

    <div class="flex items-center justify-center" v-if="allStars.length === 0">
      <div class="text-sm text-gray-500">No stars found</div>
    </div>
  </div>
</template>
