<template>
  <AuthLayout title="Verify Your Email Address">
    <div class="px-10 py-12">
      <h1 class="text-center font-bold text-3xl">Verify Your Email Address</h1>

      <div class="mx-auto mt-6 w-24 border-b-2" />

      <div v-if="resent" class="bg-blue-100 border-l-4 border-blue-400 text-blue-700 p-4 mt-6" role="alert">
        <p>A fresh verification link has been sent to your email address.</p>
      </div>

      <div class="mt-10">
        Before proceeding, please check your email for a verification link.

        If you did not receive the email <Link :href="route('verification.resend')" class="text-green-500 hover:underline">click here to request another</Link>.
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
import AuthLayout from '@/Shared/AuthLayout.vue'

export default {
  components: {
    AuthLayout,
    Link,
  },
  props: {
    resent: Boolean,
  },
}
</script>
