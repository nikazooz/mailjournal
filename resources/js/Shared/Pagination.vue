<template>
  <div class="mt-6 -mb-1 flex flex-wrap">
    <template v-for="(link, key) in links">
      <div v-if="link.url === null" :key="key" class="mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-500" :class="{ 'ml-auto': link.label === 'Next' }">{{ link.label }}</div>
      <Link v-else :key="key" class="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-green-500 focus:text-green-500" :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }" :href="link.url" preserve-scroll>{{ link.label }}</Link>
    </template>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'

export default {
  components: {
    Link,
  },

  props: {
    links: Array,
  },
}
</script>
