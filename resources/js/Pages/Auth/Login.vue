<template>
  <div class="p-6 bg-green-700 min-h-screen flex justify-center items-center">
    <div class="w-full max-w-sm">
      <div class="block mx-auto w-full max-w-xs text-white text-4xl text-center font-bold">{{ appName }}</div>
      <form class="mt-8 bg-white rounded-lg shadow-lg overflow-hidden" @submit.prevent="submit">
        <div class="px-10 py-12">
          <h1 class="text-center font-bold text-3xl">Welcome Back!</h1>
          <div class="mx-auto mt-6 w-24 border-b-2" />
          <text-input v-model="form.fields.email" class="mt-10" label="Email" :error="form.errors.first('email')" type="email" autofocus autocapitalize="off" />
          <text-input v-model="form.fields.password" class="mt-6" label="Password" :error="form.errors.first('password')" type="password" />
          <label class="mt-6 select-none flex items-center" for="remember">
            <input id="remember" v-model="form.fields.remember" class="mr-1" type="checkbox">
            <span class="text-sm">Remember Me</span>
          </label>
        </div>
        <div class="px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
          <loading-button :loading="form.sending" class="btn-green" type="submit">Login</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Inertia } from 'inertia-vue'
import Form from '@/Utils/Form'
import LoadingButton from '@/Shared/LoadingButton'
import TextInput from '@/Shared/TextInput'

export default {
  components: {
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
        email: null,
        password: null,
        remember: null
      })
    }
  },
  computed: {
    appName() {
      return this.page.props.app.name
    }
  },
  mounted() {
    document.title = `Login | ${this.appName}`
  },
  methods: {
    submit() {
      this.form.post({
        url: this.route('login.attempt').url(),
        then: () => Inertia.visit(this.intendedUrl)
      })
    }
  }
}
</script>
