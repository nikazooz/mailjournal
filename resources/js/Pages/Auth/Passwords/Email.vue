<template>
  <AuthLayout title="Reset Password">
    <form @submit.prevent="submit">
      <div class="px-10 py-12">
        <h1 class="text-center font-bold text-3xl">Reset Password</h1>

        <div v-if="status" class="bg-blue-100 border-l-4 border-blue-400 text-blue-700 p-4 mt-6" role="alert">
          <p>{{ status }}</p>
        </div>

        <TextInput v-model="form.email" class="mt-10" label="Email" :error="form.errors.email" type="email" autofocus />
      </div>

      <div class="px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
        <LoadingButton :loading="form.processing" class="btn-green" type="submit">Send Password Reset Link</LoadingButton>
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
    status: String,
  },
  data() {
    return {
      form: this.$inertia.form({
        email: null,
      }),
    }
  },
  methods: {
    submit() {
      this.form.post(this.route('password.email'))
    },
  },
}
</script>
