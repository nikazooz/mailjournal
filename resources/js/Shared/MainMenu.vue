<template>
  <div>
    <div class="mb-4">
      <Link class="flex items-center group py-3" :href="route('dashboard')">
        <icon name="dashboard" class="w-4 h-4 mr-2" :class="isUrl('dashboard') ? 'fill-white' : 'fill-green-400 group-hover:fill-white'" />
        <div :class="isUrl('dashboard') ? 'text-white' : 'text-green-300 group-hover:text-white'">Dashboard</div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="flex items-center group py-3" :href="route('questions')">
        <icon name="book" class="w-4 h-4 mr-2" :class="isUrl('questions') || isUrl('entries') ? 'fill-white' : 'fill-green-400 group-hover:fill-white'" />
        <div :class="isUrl('questions') || isUrl('entries') ? 'text-white' : 'text-green-300 group-hover:text-white'">Questions</div>
      </Link>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
import Icon from '@/Shared/Icon.vue'

export default {
  components: {
    Icon,
    Link,
  },
  methods: {
    isUrl(...urls) {
      if (urls[0] === '') {
        return location.pathname.substr(1) === ''
      }

      return urls.filter(url => location.pathname.substr(1).startsWith(url)).length
    },
  },
}
</script>
