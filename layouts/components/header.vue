<template>
    <div
        class="sticky top-0 z-10 flex flex-row my-4 justify-between items-center py-3.5 px-4  bg-white/40 backdrop-blur-md rounded-2xl mb-4">
        <div class="flex items-center justify-center">
            <a href="/" class="flex items-center"><span class="text-2xl font-serif text-black">U Stars</span></a>
        </div>
        <div class="items-center min-w-96 md:flex hidden">
            <input placeholder="Search Github Name Or Description"
                class="text-sm w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                type="text" @focus="openCommandDialog">
        </div>
        <div class="flex items-center lg:gap-4 gap-2">
            <Button>
                Get My Stars
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['openSearch'])

function openCommandDialog() {
    emit('openSearch')
}
</script>
