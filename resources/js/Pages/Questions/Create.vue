<template>
  <layout title="Create Question">
    <h1 class="mb-8 font-bold text-3xl">
      <inertia-link class="text-green-400 hover:text-green-600" :href="route('questions')">Questions</inertia-link>

      <span class="text-green-400 font-medium">/</span> Create
    </h1>
    <div class="bg-white rounded shadow overflow-hidden max-w-lg">
      <form @submit.prevent="submit">
        <div class="p-8 flex flex-wrap">
          <text-input v-model="form.message" class="mb-8 w-full" :errors="errors.message" label="Message" />

          <cron-input v-model="form.expression" class="mb-8 w-full" :errors="errors.expression" label="Recurrence" />

          <select-input v-model="form.timezone" class="w-full" :errors="errors.timezone" label="Timezone">
            <option :value="null">Default</option>
            <option :value="timezone" v-for="timezone in timezones">{{ timezone }}</option>
          </select-input>
        </div>
        <div class="px-8 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
          <loading-button :loading="sending" class="btn-green" type="submit">Create Question</loading-button>
        </div>
      </form>
    </div>
  </layout>
</template>

<script>
import Layout from '@/Shared/Layout'
import LoadingButton from '@/Shared/LoadingButton'
import CronInput from '@/Shared/CronInput'
import SelectInput from '@/Shared/SelectInput'
import TextInput from '@/Shared/TextInput'

export default {
  components: {
    Layout,
    LoadingButton,
    CronInput,
    SelectInput,
    TextInput,
  },
  props: {
    timezones: Array,
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  remember: 'form',
  data() {
    return {
      sending: false,
      form: {
        message: null,
        expression: '0 0 * * *',
        timezone: null
      }
    }
  },
  watch: {
    form: {
      handler: form => this.$inertia.cache('question', form),
      deep: true
    }
  },
  methods: {
    submit() {
      this.sending = true
      this.$inertia.post(this.route('questions.store'), this.form).then(() => {
        this.sending = false
      })
    },
  },
}
</script>
