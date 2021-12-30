<template>
  <Layout :title="question.name">
    <h1 class="mb-8 font-bold text-3xl">
      <Link class="text-green-400 hover:text-green-600" :href="route('questions')">Questions</Link>
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

        <div class="mb-8 w-full">
          <label class="form-label" for="timezone">Timezone:</label>
          <div id="timezone" class="py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative">{{ question.timezone || 'Default' }}</div>
        </div>

        <div class="w-full">
          {{ question.enabled ? 'Enabled' : 'Disabled' }}
        </div>
      </div>
      <div class="px-8 py-4 bg-gray-100 border-t border-gray-300 flex items-center">
        <button class="text-red-500 hover:underline" tabindex="-1" type="button" @click="destroy">Delete</button>
        <Link :href="route('questions.edit', question.id)" class="btn-green ml-auto">Edit</Link>
      </div>
    </div>
    <h2 class="mt-12 font-bold text-2xl">Replies</h2>
    <div class="mt-6 bg-white rounded shadow overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="px-6 pt-6 pb-4">Sent At</th>
            <th class="px-6 pt-6 pb-4">Text</th>
            <th class="px-6 pt-6 pb-4">Replied At</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-if="!entries.data.length">
            <td class="border-t px-6 py-4" colspan="4">No replies found.</td>
          </tr>
          <tr v-for="entry in entries.data" v-else :key="entry.id" class="hover:bg-gray-200 focus-within:bg-gray-200">
            <td class="border-t">
              <Link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1">
                {{ entry.question_sent_at | formatDatetime }}
              </Link>
            </td>
            <td class="border-t">
              <Link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1" v-html="entry.reply" />
            </td>
            <td class="border-t">
              <Link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1">
                {{ entry.replied_at | formatDatetime }}
              </Link>
            </td>
            <td class="border-t w-px">
              <Link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-500" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination :links="entries.links" />
  </Layout>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
import cronstrue from 'cronstrue'
import Icon from '@/Shared/Icon'
import Layout from '@/Shared/Layout'
import Pagination from '@/Shared/Pagination'

export default {
  components: {
    Icon,
    Layout,
    Link,
    Pagination,
  },
  props: {
    question: Object,
    entries: Object,
  },
  computed: {
    humanReadableExpression() {
      return cronstrue.toString(this.question.expression)
    },
  },
  methods: {
    destroy() {
      if (confirm('Are you sure you want to delete this question?')) {
        this.$inertia.delete(this.route('questions.destroy', this.question.id))
      }
    },
    trimString(value, charCount = 50) {
      const segment = value.substring(0, charCount)

      return segment === value ? segment : `${segment}...`
    },
  },
}
</script>
