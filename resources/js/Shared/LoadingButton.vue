<template>
  <button :disabled="loading" class="flex items-center" :class="{'is-loading': loading}">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
}
</script>
