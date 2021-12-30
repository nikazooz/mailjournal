<template>
  <div>
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <input :id="id" ref="input" v-bind="$attrs" class="form-input" :class="{ error: error }" :type="type" :value="humanReadableExpression" @input="onManualInput" @click="toggle" autocomplete="off">
    <div v-if="error" class="form-error">{{ error }}</div>
    <portal v-if="show" to="dropdown">
      <div>
        <div style="position: fixed; top: 0; right: 0; left: 0; bottom: 0; z-index: 99998;" @click="toggle" />
        <div ref="dropdown" style="position: absolute; z-index: 99999;" @click.stop>
          <div class="mt-2 px-4 py-6 w-screen shadow-lg bg-white rounded" style="max-width: 300px;">
            <SelectInput v-model="daysOfWeek" class="mb-4" label="Days of Week" multiple>
              <option v-for="(label,value) in weekdays" :value="value" :key="value">{{ label }}</option>
            </SelectInput>

            <SelectInput v-model="dayOfMonth" class="mb-4" label="Day of the Month">
              <option v-for="(label,value) in monthdays" :value="value" :key="value">{{ label }}</option>
            </SelectInput>

            <TextInput v-model="time" type="time" label="Time" placeholder="f.e. 23:30" />
          </div>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
import range from 'lodash/range'
import padStart from 'lodash/padStart'
import isEqual from 'lodash/isEqual'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import { createPopper } from '@popperjs/core'
import cronstrue from 'cronstrue'
import SelectInput from '@/Shared/SelectInput'
import TextInput from '@/Shared/TextInput'

dayjs.extend(weekday)

export default {
  components: {
    SelectInput,
    TextInput,
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `TextInput-${this._uid}`
      },
    },
    type: {
      type: String,
      default: 'text',
    },
    value: String,
    label: String,
    error: String,
    placement: {
      type: String,
      default: 'bottom-end',
    },
    boundary: {
      type: String,
      default: 'scrollParent',
    },
  },
  data() {
    return {
      show: false,
      daysOfWeek: [],
      dayOfMonth: '*',
      time: '00:00',
    }
  },
  computed: {
    weekdays() {
      const weekdays = {}

      range(7).forEach(i => {
        const day = dayjs().startOf('week').add(i, 'day')
        const key = day.format('ddd').toUpperCase()

        weekdays[key] = day.format('dddd')
      })

      return weekdays
    },
    monthdays () {
      const monthdays = {
        '*': 'Any',
      }

      range(31).forEach(i => {
        const day = i + 1
        monthdays[day] = day
      })

      monthdays['L'] = 'Last day of month'

      return monthdays
    },
    humanReadableExpression() {
      return this.value ? cronstrue.toString(this.value) : ''
    },
    hours() {
      return parseInt(this.time.split(':')[0])
    },
    minutes() {
      return parseInt(this.time.split(':')[1])
    },
  },
  watch: {
    show(show) {
      if (show) {
        this.$nextTick(() => {
          this.popper = createPopper(this.$el, this.$refs.dropdown, {
            placement: this.placement,
            modifiers: [
              {
                name: 'preventOverflow',
                options: {
                  boundary: this.boundary,
                }
              },
            ],
          })
        })
      } else if (this.popper) {
        setTimeout(() => this.popper.destroy(), 100)
      }
    },
    frequency() {
      this.emitInput()
    },
    daysOfWeek() {
      this.emitInput()
    },
    dayOfMonth() {
      this.emitInput()
    },
    time() {
      this.emitInput()
    },
  },
  created() {
    this.parseCron(this.value)
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.close()
      }
    })
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    },
    close() {
      this.show = false
    },
    toggle() {
      this.show = !this.show
    },
    onManualInput(event) {
      event.preventDefault()
      event.target.value = this.value || ''
    },
    makeExpression() {
      const daysOfWeek = isEqual(this.daysOfWeek, Object.keys(this.weekdays)) ? '*' : this.daysOfWeek.join(',')

      return `${this.minutes} ${this.hours} ${this.dayOfMonth} * ${daysOfWeek}`
    },
    emitInput() {
      this.$emit('input', this.makeExpression())
    },
    parseCron(expression) {
      const parts = expression.split(/\s+/)

      const minutes = parts[0] ? padStart(parts[0], 2, '0') : '00'
      const hours = parts[1] ? padStart(parts[1], 2, '0') : '00'
      const dayOfMonth = parts[2] || '*'
      const daysOfWeek = parts[4] ? parts[4].split(',') : Object.keys(this.weekdays)

      this.time = `${hours}:${minutes}`
      this.dayOfMonth = dayOfMonth
      this.daysOfWeek = daysOfWeek
    },
  },
}
</script>
