<template>
  <AuthLayout title="Reset Password">
    <form @submit.prevent="submit">
      <div class="px-10 py-12">
        <h1 class="text-center font-bold text-3xl">Reset Password</h1>

        <TextInput v-model="form.email" class="mt-10" label="Email" :error="form.errors.email" type="email" autofocus autocapitalize="off" required />

        <TextInput v-model="form.password" class="mt-6" label="Password" :error="form.errors.password" type="password" autocapitalize="off" required />

        <TextInput v-model="form.password_confirmation" class="mt-6" label="Password Confirmation" :error="form.errors.password_confirmation" type="password" autocapitalize="off" required />
      </div>

      <div class="px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
        <LoadingButton :loading="sending" class="btn-green" type="submit">Reset Password</LoadingButton>
      </div>
    </form>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/Shared/AuthLayout.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import TextInput from '@/Shared/TextInput.vue'

export default {
  components: {
    AuthLayout,
    LoadingButton,
    TextInput,
  },
  props: {
    token: String,
    email: String,
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
        password_confirmation: null,
        token: this.token,
      },
    }
  },
  watch: {
    token(value) {
      this.form.token = value
    },
  },
  methods: {
    submit() {
      this.form.post(this.route('password.update'))
    },
  },
}
</script>
