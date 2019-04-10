<template>
  <button :disabled="loading" class="flex items-center">
    <div v-if="loading" class="spinner mr-2" />
    <slot v-else/>
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
}
</script>
