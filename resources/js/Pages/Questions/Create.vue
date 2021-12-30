<template>
  <Layout title="Create Question">
    <h1 class="mb-8 font-bold text-3xl">
      <Link class="text-green-400 hover:text-green-600" :href="route('questions')">Questions</Link>

      <span class="text-green-400 font-medium">/</span> Create
    </h1>
    <div class="bg-white rounded shadow overflow-hidden max-w-lg">
      <form @submit.prevent="submit">
        <div class="p-8 flex flex-wrap">
          <TextInput v-model="form.message" class="mb-8 w-full" :error="form.errors.message" label="Message" />

          <CronInput v-model="form.expression" class="mb-8 w-full" :error="form.errors.expression" label="Recurrence" />

          <SelectInput v-model="form.timezone" class="w-full" :error="form.errors.timezone" label="Timezone">
            <option :value="null">Default</option>
            <option v-for="timezone in timezones" :key="timezone" :value="timezone">{{ timezone }}</option>
          </SelectInput>
        </div>
        <div class="px-8 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
          <LoadingButton :loading="form.processing" class="btn-green" type="submit">Create Question</LoadingButton>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
import CronInput from '@/Shared/CronInput'
import Layout from '@/Shared/Layout'
import LoadingButton from '@/Shared/LoadingButton'
import SelectInput from '@/Shared/SelectInput'
import TextInput from '@/Shared/TextInput'

export default {
  components: {
    CronInput,
    Layout,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
  },
  props: {
    timezones: Array,
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form('question', {
        message: null,
        expression: '0 0 * * *',
        timezone: null,
        enabled: true,
      }),
    }
  },
  methods: {
    submit() {
      this.form.post(this.route('questions.store'))
    },
  },
}
</script>
