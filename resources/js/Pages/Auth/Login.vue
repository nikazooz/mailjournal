<template>
  <auth-layout title="Login">
    <div class="block mx-auto w-full max-w-xs text-white text-4xl text-center font-bold" scope="heading">{{ appName }}</div>

    <form @submit.prevent="submit">
      <div class="px-10 py-12">
        <h1 class="text-center font-bold text-3xl">Welcome Back!</h1>

        <div class="mx-auto mt-6 w-24 border-b-2" />

        <text-input
          v-model="form.email"
          type="email"
          name="email"
          class="mt-10"
          label="Email"
          :errors="errors.email"
          autocapitalize="off"
          autofocus
        />

        <text-input
          v-model="form.password"
          type="password"
          name="password"
          class="mt-6"
          label="Password"
          :errors="errors.password"
        />

        <label class="mt-6 select-none flex items-center" for="remember">
          <input id="remember" v-model="form.remember" type="checkbox" name="remember" class="mr-1">

          <span class="text-sm">Remember Me</span>
        </label>
      </div>

      <div class="px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-between items-center">
        <inertia-link class="hover:underline" tabindex="-1" :href="route('password.request')">Forget password?</inertia-link>

        <loading-button :loading="sending" class="btn-green" type="submit">Login</loading-button>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import AuthLayout from '@/Shared/AuthLayout'
import LoadingButton from '@/Shared/LoadingButton'
import TextInput from '@/Shared/TextInput'

export default {
  components: {
    AuthLayout,
    LoadingButton,
    TextInput,
  },
  props: {
    errors: Object,
  },
  data() {
    return {
      sending: false,
      form: {
        email: null,
        password: null,
        remember: null,
      },
    }
  },
  computed: {
    appName() {
      return this.$page.app.name
    },
  },
  methods: {
    submit() {
      this.sending = true
      this.$inertia.post(this.route('login'), this.form).then(() => {
        this.sending = false
      })
    },
  },
}
</script>
