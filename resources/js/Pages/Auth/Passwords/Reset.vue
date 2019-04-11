<template>
  <auth-layout title="Reset Password">
    <form @submit.prevent="submit">
      <div class="px-10 py-12">
        <h1 class="text-center font-bold text-3xl">Reset Password</h1>

        <text-input v-model="form.fields.email" class="mt-10" label="Email" :error="form.errors.first('email')" type="email" autofocus autocapitalize="off" required/>

        <text-input v-model="form.fields.password" class="mt-6" label="Password" :error="form.errors.first('password')" type="password" autocapitalize="off" required/>

        <text-input v-model="form.fields.password_confirmation" class="mt-6" label="Password Confirmation" :error="form.errors.first('password_confirmation')" type="password" autocapitalize="off" required/>
      </div>

      <div class="px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
        <loading-button :loading="form.sending" class="btn-green" type="submit">Reset Password</loading-button>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import { Inertia } from 'inertia-vue'
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
    token: String,
    email: String
  },
  inject: ['page'],
  data() {
    return {
      form: new Form({
        email: null,
        password: null,
        password_confirmation: null,
        token: this.token
      })
    }
  },
  watch: {
    token(value) {
      this.form.fields.token = value
    }
  },
  methods: {
    submit() {
      this.status = null
      this.form.post({
        url: this.route('password.update').url(),
        then: response => Inertia.visit(response.redirectTo)
      })
    }
  }
}
</script>
