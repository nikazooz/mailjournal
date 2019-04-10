<template>
  <layout title="Dashboard">
    <h1 class="mb-8 font-bold text-3xl">Dashboard</h1>
    <p class="mb-12 leading-normal">Hey there! Welcome to MailJournal, an app that allows you to schedule questions and make a journal by responding to them.</p>

    <h2 class="mb-8 font-bold text-3xl" v-if="entries.length">Latest Entries</h2>
    <div class="mt-6 bg-white rounded shadow overflow-x-auto" v-if="entries.length">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="px-6 pt-6 pb-4">Question</th>
            <th class="px-6 pt-6 pb-4">Question Sent At</th>
            <th class="px-6 pt-6 pb-4">Reply</th>
            <th class="px-6 pt-6 pb-4">Replied At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in entries" class="hover:bg-gray-200 focus-within:bg-gray-200">
            <td class="border-t px-6 py-4">
              <inertia-link :href="route('questions.show', entry.question_id)" class="text-blue-500 hover:text-blue-600 underline">{{ entry.question_message }}</inertia-link>
            </td>
            <td class="border-t px-6 py-4">{{ entry.question_sent_at | formatDatetime }}</td>
            <td class="border-t px-6 py-4" v-html="entry.reply" />
            <td class="border-t px-6 py-4">{{ entry.replied_at | formatDatetime }}</td>
            <td class="border-t w-px">
              <inertia-link class="px-6 py-4 flex items-center" :href="route('entries.show', entry.id)" tabindex="-1">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-500" />
              </inertia-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </layout>
</template>

<script>
import { InertiaLink } from 'inertia-vue'
import Layout from '@/Shared/Layout'
import Icon from '@/Shared/Icon'

export default {
  components: {
    InertiaLink,
    Layout,
    Icon
  },
  props: {
    entries: Array
  }
}
</script>
