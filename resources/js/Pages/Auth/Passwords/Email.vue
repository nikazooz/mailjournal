<template>
  <auth-layout title="Reset Password">
    <form @submit.prevent="submit">
      <div class="px-10 py-12">
        <h1 class="text-center font-bold text-3xl">Reset Password</h1>

        <div class="bg-blue-100 border-l-4 border-blue-400 text-blue-700 p-4 mt-6" role="alert" v-if="status">
          <p>{{ status }}</p>
        </div>

        <text-input v-model="form.fields.email" class="mt-10" label="Email" :error="form.errors.first('email')" type="email" autofocus />
      </div>

      <div class="px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
        <loading-button :loading="form.sending" class="btn-green" type="submit">Send Password Reset Link</loading-button>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import Form from '@/Utils/Form'
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
    intendedUrl: String
  },
  inject: ['page'],
  data() {
    return {
      form: new Form({
        email: null
      }),
      status: null
    }
  },
  methods: {
    submit() {
      this.status = null
      this.form.post({
        url: this.route('password.email').url(),
        then: response => {
          this.status = response.status
        }
      })
    }
  }
}
</script>
