<template>
  <Layout title="Edit Question">
    <h1 class="mb-8 font-bold text-3xl">
      <Link class="text-green-400 hover:text-green-600" :href="route('questions')">Questions</Link>
      <span class="text-green-400 font-medium">/</span>
      <Link class="text-green-400 hover:text-green-600" :href="route('questions.show', question.id)">{{ question.id }}</Link>
      <span class="text-green-400 font-medium">/</span>
      Edit
    </h1>
    <div class="bg-white rounded shadow overflow-hidden max-w-lg">
      <form @submit.prevent="submit">
        <div class="p-8 flex flex-wrap">
          <TextInput v-model="form.message" class="mb-8 w-full" :error="form.errors.message" label="Message" />
          <CronInput v-model="form.expression" class="mb-8 w-full" :error="form.errors.expression" label="Recurrence" />
          <SelectInput v-model="form.timezone" class="mb-8 w-full" :error="form.errors.timezone" label="Timezone">
            <option :value="null">Default</option>
            <option v-for="timezone in timezones" :key="timezone" :value="timezone">{{ timezone }}</option>
          </SelectInput>
          <label for="enabled">
            <input id="enabled" v-model="form.enabled" name="enabled" type="checkbox"> Enabled
          </label>
        </div>
        <div class="px-8 py-4 bg-gray-100 border-t border-gray-300 flex items-center">
          <LoadingButton :loading="form.processing" class="btn-green ml-auto" type="submit">Update Question</LoadingButton>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'
import Layout from '@/Shared/Layout.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import CronInput from '@/Shared/CronInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import TextInput from '@/Shared/TextInput.vue'

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
    question: {
      type: Object,
      required: true,
    },
    timezones: Array,
  },
  data() {
    return {
      form: this.$inertia.form({
        message: this.question.message,
        expression: this.question.expression,
        timezone: this.question.timezone,
        enabled: this.question.enabled,
      }),
    }
  },
  methods: {
    submit() {
      this.form.put(this.route('questions.update', this.question.id))
    },
  },
}
</script>
