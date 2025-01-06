<template>
  <div class="flex flex-col container mx-auto min-h-screen">
    <Header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue'

</script>