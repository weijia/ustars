<script setup lang="ts">
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { useMagicKeys } from '@vueuse/core'
import { ref, watch, onMounted, computed } from 'vue'
import Fuse from 'fuse.js'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-vue-next'
import Header from '@/layouts/components/header.vue'

// 状态管理
const searchQuery = ref('')
const open = ref(false)
const allStars = ref([])
let fuse: Fuse<any>

// 计算过滤后的结果
const searchResults = computed(() => {
  if (!searchQuery.value || !fuse) {
    return allStars.value.slice(0, 10) // 默认显示前10个
  }

  const results = fuse.search(searchQuery.value)
  return results
    .filter(result => result.score && result.score < 0.4)
    .map(result => result.item)
    .slice(0, 10)
})

// 初始化数据
onMounted(async () => {
  const response = await fetch('/api/stars')
  allStars.value = await response.json()

  fuse = new Fuse(allStars.value, {
    keys: [
      { name: 'name', weight: 1 },
      { name: 'description', weight: 0.8 },
      { name: 'language', weight: 0.6 }
    ],
    threshold: 0.4,
    includeScore: true
  })
})

// 快捷键处理
const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    handleOpenChange()
})

// 事件处理
function handleOpenChange() {
  open.value = true;
}

function handleItemSelect(url: string) {
  window.open(url, '_blank')
  open.value = false
}
</script>

<template>
  <div class="mt-100">
    <CommandDialog v-model:open="open">
      <div class="flex items-center border-b px-3" cmdk-input-wrapper>
        <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input auto-focus
          :class="cn('flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none')"
          v-model="searchQuery" placeholder="Search Github Name Or Description" />
      </div>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup v-if="searchResults.length > 0" heading="Search Results">
          <CommandItem v-for="star in searchResults" :key="star.full_name" :value="star.name">
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2">
                <span class="text-md font-medium">{{ star.name }}</span>
                <span v-if="star.language" class="text-xs text-muted-foreground">{{ star.language }}</span>
                <span class="text-xs text-muted-foreground">⭐ {{ star.stargazers_count }}</span>
              </div>
              <p v-if="star.description" class="text-sm text-muted-foreground line-clamp-1">
                {{ star.description }}
              </p>
            </div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>