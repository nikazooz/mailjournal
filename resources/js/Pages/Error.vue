<template>
  <div class="error-page">
    <div class="code">{{ code }}</div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  inject: ['page'],
  watch: {
    code() {
      this.updatePageTitle(this.message)
    }
  },
  computed: {
    code() {
      return this.page.props.code
    },
    message() {
      return this.page.props.message
    }
  },
  mounted() {
    this.updatePageTitle(this.message)
  },
  methods: {
    updatePageTitle(title) {
      document.title = title ? `${title} | ${this.page.props.app.name}` : this.page.props.app.name
    }
  }
}
</script>
