<template>
  <Layout title="Questions">
    <h1 class="mb-8 font-bold text-3xl">Questions</h1>
    <div class="mb-6 flex justify-between items-center">
      <Link class="btn-green" :href="route('questions.create')">
        <span>Create</span>
        <span class="hidden md:inline">Question</span>
      </Link>
    </div>
    <div class="bg-white rounded shadow overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <tr class="text-left font-bold">
          <th class="px-6 pt-6 pb-4">Message</th>
        </tr>
        <tr v-for="question in questions.data" :key="question.id" class="hover:bg-gray-200 focus-within:bg-gray-200">
          <td class="border-t">
            <Link class="px-6 py-4 flex items-center focus:text-green-500" :href="route('questions.show', question.id)">
              {{ question.message }}
            </Link>
          </td>
          <td class="border-t w-px">
            <Link class="px-4 flex items-center" :href="route('questions.show', question.id)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-500" />
            </Link>
          </td>
        </tr>
        <tr v-if="questions.data.length === 0">
          <td class="border-t px-6 py-4" colspan="4">No questions found.</td>
        </tr>
      </table>
    </div>
    <Pagination :links="questions.links" />
  </Layout>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
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
    questions: Object,
  },
}
</script>
