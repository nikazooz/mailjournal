<template>
  <AuthLayout title="Login">
    <div class="block mx-auto w-full max-w-xs text-white text-4xl text-center font-bold" scope="heading">{{ appName }}</div>

    <form @submit.prevent="submit">
      <div class="px-10 py-12">
        <h1 class="text-center font-bold text-3xl">Welcome Back!</h1>

        <div class="mx-auto mt-6 w-24 border-b-2" />

        <TextInput
          v-model="form.email"
          type="email"
          name="email"
          class="mt-10"
          label="Email"
          :error="form.errors.email"
          autocapitalize="off"
          autofocus
        />

        <TextInput
          v-model="form.password"
          type="password"
          name="password"
          class="mt-6"
          label="Password"
          :error="form.errors.password"
        />

        <label class="mt-6 select-none flex items-center" for="remember">
          <input id="remember" v-model="form.remember" type="checkbox" name="remember" class="mr-1">

          <span class="text-sm">Remember Me</span>
        </label>
      </div>

      <div class="px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-between items-center">
        <Link class="hover:underline" tabindex="-1" :href="route('password.request')">Forget password?</Link>

        <LoadingButton :loading="form.processing" class="btn-green" type="submit">Login</LoadingButton>
      </div>
    </form>
  </AuthLayout>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
import AuthLayout from '@/Shared/AuthLayout.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import TextInput from '@/Shared/TextInput.vue'

export default {
  components: {
    AuthLayout,
    Link,
    LoadingButton,
    TextInput,
  },
  data() {
    return {
      form: this.$inertia.form({
        email: null,
        password: null,
        remember: null,
      }),
    }
  },
  computed: {
    appName() {
      return this.$page.props.app.name
    },
  },
  methods: {
    submit() {
      this.form.post(this.route('login'))
    },
  },
}
</script>
