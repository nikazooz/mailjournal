<template>
  <div class="error-page">
    <div class="code">{{ code }}</div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  watch: {
    code() {
      this.updatePageTitle(this.message)
    }
  },
  computed: {
    code() {
      return this.$page.code
    },
    message() {
      return this.$page.message
    }
  },
  mounted() {
    this.updatePageTitle(this.message)
  },
  methods: {
    updatePageTitle(title) {
      document.title = title ? `${title} | ${this.$page.app.name}` : this.$page.app.name
    }
  }
}
</script>
