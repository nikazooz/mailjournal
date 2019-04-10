<template>
  <layout title="Create Question">
    <h1 class="mb-8 font-bold text-3xl">
      <inertia-link class="text-green-400 hover:text-green-600" :href="route('questions')">Questions</inertia-link>

      <span class="text-green-400 font-medium">/</span> Create
    </h1>
    <div class="bg-white rounded shadow overflow-hidden max-w-lg">
      <form @submit.prevent="submit">
        <div class="p-8 flex flex-wrap">
          <text-input v-model="form.fields.message" class="mb-8 w-full" :error="form.errors.first('message')" label="Message" />

          <cron-input v-model="form.fields.expression" class="mb-8 w-full" :error="form.errors.first('expression')" label="Recurrence" />

          <select-input v-model="form.fields.timezone" class="w-full" :error="form.errors.first('timezone')" label="Timezone">
            <option :value="null">Default</option>
            <option :value="timezone" v-for="timezone in timezones">{{ timezone }}</option>
          </select-input>
        </div>
        <div class="px-8 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center">
          <loading-button :loading="form.sending" class="btn-green" type="submit">Create Question</loading-button>
        </div>
      </form>
    </div>
  </layout>
</template>

<script>
import { Inertia, InertiaLink } from 'inertia-vue'
import Form from '@/Utils/Form'
import Layout from '@/Shared/Layout'
import LoadingButton from '@/Shared/LoadingButton'
import CronInput from '@/Shared/CronInput'
import SelectInput from '@/Shared/SelectInput'
import TextInput from '@/Shared/TextInput'

export default {
  components: {
    InertiaLink,
    Layout,
    LoadingButton,
    CronInput,
    SelectInput,
    TextInput,
  },
  props: {
    timezones: Array
  },
  data() {
    return {
      form: new Form({
        name: null,
        email: null,
        phone: null,
        address: null,
        city: null,
        region: null,
        country: null,
        postal_code: null,
      }),
    }
  },
  methods: {
    submit() {
      this.form.post({
        url: this.route('questions.store').url(),
        then: data => Inertia.visit(this.route('questions.show', data.id)),
      })
    },
  },
}
</script>
