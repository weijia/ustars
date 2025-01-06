<script setup lang="ts">
const allStars = inject('allStars')
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="star in allStars" :key="star.id"
      class="rounded-md p-2 sm:p-4 hover:p-3 flex flex-col border border-gray-200 hover:bg-white/80 hover:border transition-all duration-200 ease-in-out relative cursor-pointer bg-white/40">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-md font-medium">{{ star.name }}</span>
        </div>
        <div class="text-sm text-gray-500">{{ star.stargazers_count }}</div>
      </div>

      <div class="text-sm text-gray-500 mt-2 line-clamp-2">{{ star.description }}</div>

      <div class="flex items-center justify-end mt-2">
        <div class="text-sm text-gray-500">{{ star.language }}</div>
      </div>

      <!-- star chart -->
      <!-- <div class="flex items-center justify-center">
        <img :src="`https://starchart.cc/${star.full_name}.svg`" alt="star chart" class="w-full h-full">
      </div> -->
    </div>
    <div class="flex items-center justify-center">
    </div>

  </div>
</template>

