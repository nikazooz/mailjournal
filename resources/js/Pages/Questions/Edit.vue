<template>
  <layout title="Edit Question">
    <h1 class="mb-8 font-bold text-3xl">
      <inertia-link class="text-green-400 hover:text-green-600" :href="route('questions')">Questions</inertia-link>
      <span class="text-green-400 font-medium">/</span>
      <inertia-link class="text-green-400 hover:text-green-600" :href="route('questions.show', question.id)">{{ question.id }}</inertia-link>
      <span class="text-green-400 font-medium">/</span>
      Edit
    </h1>
    <div class="bg-white rounded shadow overflow-hidden max-w-lg">
      <form @submit.prevent="submit">
        <div class="p-8 flex flex-wrap">
          <text-input v-model="form.message" class="mb-8 w-full" :errors="errors.message" label="Message" />
          <cron-input v-model="form.expression" class="mb-8 w-full" :errors="errors.expression" label="Recurrence" />
          <select-input v-model="form.timezone" class="w-full" :errors="errors.timezone" label="Timezone">
            <option :value="null">Default</option>
            <option :value="timezone" v-for="timezone in timezones" :key="timezone">{{ timezone }}</option>
          </select-input>
        </div>
        <div class="px-8 py-4 bg-gray-100 border-t border-gray-300 flex items-center">
          <loading-button :loading="sending" class="btn-green ml-auto" type="submit">Update Question</loading-button>
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
    TextInput
  },
  props: {
    question: {
      type: Object,
      required: true
    },
    timezones: Array,
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      sending: false,
      form: {
        message: this.question.message,
        expression: this.question.expression,
        timezone: this.question.timezone
      }
    }
  },
  methods: {
    submit() {
      this.sending = true
      this.$inertia.put(this.route('questions.update', this.question.id), this.form).then(() => {
        this.sending = false
      })
    }
  }
}
</script>
