<template>
  <layout :title="form.fields.name">
    <h1 class="mb-8 font-bold text-3xl">
      <inertia-link class="text-green-400 hover:text-green-600" :href="route('questions')">Questions</inertia-link>
      <span class="text-green-400 font-medium">/</span>
      {{ question.id }}
    </h1>
    <div class="bg-white rounded shadow overflow-hidden max-w-lg">
      <div class="p-8 flex flex-wrap">
        <div class="mb-8 w-full">
          <label class="form-label" for="message">Message:</label>
          <div id="message" class="py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative">{{ question.message }}</div>
        </div>

        <div class="mb-8 w-full">
          <label class="form-label" for="expression">Recurrence:</label>
          <div id="expression" class="py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative">{{ humanReadableExpression }}</div>
        </div>

        <div class="w-full">
          <label class="form-label" for="timezone">Timezone:</label>
          <div id="timezone" class="py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative">{{ question.timezone || 'Default' }}</div>
        </div>
      </div>
       <div class="px-8 py-4 bg-gray-100 border-t border-gray-300 flex items-center">
        <button class="text-red-500 hover:underline" tabindex="-1" type="button" @click="destroy">Delete</button>
        <inertia-link :href="route('questions.edit', question.id)" class="btn-green ml-auto">Edit</inertia-link>
      </div>
    </div>
    <h2 class="mt-12 font-bold text-2xl">Answers</h2>
    <div class="mt-6 bg-white rounded shadow overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="px-6 pt-6 pb-4">Sent At</th>
            <th class="px-6 pt-6 pb-4">Text</th>
            <th class="px-6 pt-6 pb-4">Replied At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in entries.data" v-if="entries.data.length" class="hover:bg-gray-200 focus-within:bg-gray-200">
            <td class="border-t">
              <inertia-link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1">
                {{ entry.question_sent_at | formatDatetime }}
              </inertia-link>
            </td>
            <td class="border-t" >
              <inertia-link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1" v-html="entry.reply" />
            </td>
            <td class="border-t">
              <inertia-link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1">
                {{ entry.replied_at | formatDatetime }}
              </inertia-link>
            </td>
            <td class="border-t w-px">
              <inertia-link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-500" />
              </inertia-link>
            </td>
          </tr>
          <tr v-else>
            <td class="border-t px-6 py-4" colspan="3">No answers found.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination :links="entries.links" />
  </layout>
</template>

<script>
import { Inertia, InertiaLink } from 'inertia-vue'
import cronstrue from 'cronstrue'
import Form from '@/Utils/Form'
import Icon from '@/Shared/Icon'
import Layout from '@/Shared/Layout'
import LoadingButton from '@/Shared/LoadingButton'
import Pagination from '@/Shared/Pagination'
import SelectInput from '@/Shared/SelectInput'
import TextInput from '@/Shared/TextInput'

export default {
  components: {
    InertiaLink,
    Icon,
    Layout,
    LoadingButton,
    Pagination,
    SelectInput,
    TextInput
  },
  props: {
    question: Object,
    entries: Object,
  },
  data() {
    return {
      form: new Form()
    }
  },
  computed: {
    humanReadableExpression() {
      return cronstrue.toString(this.question.expression)
    }
  },
  methods: {
    destroy() {
      if (confirm('Are you sure you want to delete this question?')) {
        this.form.delete({
          url: this.route('questions.destroy', this.question.id).url(),
          then: () => Inertia.replace(this.route('questions').url()),
        })
      }
    },
    trimString(value, charCount = 50) {
      const segment = value.substring(0, 50)

      return segment === value ? segment : `${segment}...`
    }
  }
}
</script>
