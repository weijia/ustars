<script setup lang="ts">
import Search from '@/pages/components/search.vue'

const allStars = ref([])
onMounted(async () => {
  const response = await fetch('/api/stars')
  allStars.value = await response.json()
})

provide('allStars', allStars)

</script>
<template>
  <div class="bg-gradient-to-t from-[#C1C9DB] to-[#E0E0E1] h-full min-h-screen bg-fixed trancy-zh-CN">
    <NuxtLayout>
      <Search />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
