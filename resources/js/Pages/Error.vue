<template>
  <div class="error-page">
    <Head :title="title" />
    <div class="code">{{ status }}</div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue'

export default {
  component: {
    Head
  },

  props: {
    status: Number,
    message: String,
  },
  computed: {
    title() {
      return `${this.status}: ${this.message}`
    },
    description() {
      return {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
      }[this.status]
    },
  },
}
</script>
