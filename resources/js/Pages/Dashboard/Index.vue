<template>
  <Layout title="Dashboard">
    <div v-if="status" class="bg-blue-100 border-l-4 border-blue-400 text-blue-700 p-4 mb-8" role="alert">
      <p>{{ status }}</p>
    </div>

    <h1 class="mb-8 font-bold text-3xl">Dashboard</h1>

    <p class="mb-12 leading-normal">Hey there! Welcome to MailJournal, an app that allows you to schedule questions and make a journal by responding to them.</p>

    <h2 v-if="entries.length" class="mb-8 font-bold text-3xl">Latest Entries</h2>

    <div v-if="entries.length" class="mt-6 bg-white rounded shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="px-6 pt-6 pb-4">Question Sent At</th>

            <th class="px-6 pt-6 pb-4">Question</th>

            <th class="px-6 pt-6 pb-4">Reply</th>

            <th class="px-6 pt-6 pb-4">Replied At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in entries" :key="entry.id" class="hover:bg-gray-200 focus-within:bg-gray-200">
            <td class="border-t px-6 py-4">{{ entry.question_sent_at | formatDatetime }}</td>

            <td class="border-t px-6 py-4">
              <inertia-link :href="route('questions.show', entry.question_id)" class="text-blue-500 hover:text-blue-600 underline">{{ entry.question_message }}</inertia-link>
            </td>

            <!-- eslint-disable-next-line vue/no-v-html -->
            <td class="border-t px-6 py-4" v-html="entry.reply" />

            <td class="border-t px-6 py-4">{{ entry.replied_at | formatDatetime }}</td>

            <td class="border-t w-px">
              <Link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1">
                <Icon name="cheveron-right" class="block w-6 h-6 fill-gray-500" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
import Layout from '@/Shared/Layout'
import Icon from '@/Shared/Icon'

export default {
  components: {
    Icon,
    Layout,
    Link,
  },
  props: {
    entries: Array,
    status: String,
  },
}
</script>
