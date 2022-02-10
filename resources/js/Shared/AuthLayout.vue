<template>
  <div class="p-6 bg-green-700 min-h-screen flex justify-center items-center">
    <Head :title="title" />
    <div class="w-full max-w-sm">
      <div class="block mx-auto w-full max-w-xs text-white text-4xl text-center font-bold" v-if="$slots.heading">
        <slot name="heading" />
      </div>

      <div class="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue'

export default {
  components: {
    Head,
  },

  props: {
    title: String,
  },
}
</script>
