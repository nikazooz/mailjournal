<template>
  <Layout :title="`Entry #${entry.id}`">
    <h1 class="mb-8 font-bold text-3xl">
      <Link class="text-green-400 hover:text-green-600" :href="route('questions')">Questions</Link>
      <span class="text-green-400 font-medium">/</span>
      <Link class="text-green-400 hover:text-green-600" :href="route('questions.show', entry.question_id)">{{ entry.question_id }}</Link>
      <span class="text-green-400 font-medium">/</span>
      Entries
      <span class="text-green-400 font-medium">/</span>
      {{ entry.id }}
    </h1>
    <div class="bg-white rounded shadow overflow-hidden max-w-lg">
      <div class="p-8 flex flex-wrap">
        <div class="mb-8 w-full">
          <label class="form-label" for="message">Sent At:</label>
          <div id="message" class="py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative">{{ entry.question_sent_at | formatDatetime }}</div>
        </div>
        <div class="mb-8 w-full">
          <label class="form-label" for="message">Replied At:</label>
          <div id="message" class="py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative">{{ entry.replied_at | formatDatetime }}</div>
        </div>

        <div class="w-full">
          <label class="form-label" for="timezone">Reply:</label>
          <div id="timezone" class="p-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative border rounded" v-html="entry.reply" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
import Layout from '@/Shared/Layout.vue'

export default {
  components: {
    Layout,
    Link,
  },
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
}
</script>
