<template>
  <auth-layout title="Reset Password">
    <form @submit.prevent="submit">
      <div class="px-10 py-12">
        <h1 class="text-center font-bold text-3xl">Reset Password</h1>

        <text-input v-model="form.email" class="mt-10" label="Email" :errors="errors.email" type="email" autofocus autocapitalize="off" required/>

        <text-input v-model="form.password" class="mt-6" label="Password" :errors="errors.password" type="password" autocapitalize="off" required/>

        <text-input v-model="form.password_confirmation" class="mt-6" label="Password Confirmation" :errors="errors.password_confirmation" type="password" autocapitalize="off" required/>
      </div>

      <div class="px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
        <loading-button :loading="sending" class="btn-green" type="submit">Reset Password</loading-button>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import { Inertia } from 'inertia-vue'
import AuthLayout from '@/Shared/AuthLayout'
import LoadingButton from '@/Shared/LoadingButton'
import TextInput from '@/Shared/TextInput'

export default {
  components: {
    AuthLayout,
    LoadingButton,
    TextInput
  },
  props: {
    errors: Object,
    token: String,
    email: String
  },
  inject: ['page'],
  data() {
    return {
      sending: false,
      form: {
        email: null,
        password: null,
        password_confirmation: null,
        token: this.token
      }
    }
  },
  watch: {
    token(value) {
      this.form.token = value
    }
  },
  methods: {
    submit() {
      this.sending = true
      Inertia.post(this.route('password.update'), this.form).then(() => {
        this.sending = false
      })
    }
  }
}
</script>
