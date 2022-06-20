import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import PortalVue from 'portal-vue'
import dayjs from 'dayjs'

Vue.config.productionTip = false

if (process.env.MIX_APP_ENV === 'production') {
    Vue.config.devtools = false
    Vue.config.debug = false
    Vue.config.silent = true
}

Vue.mixin({ methods: { route: window.route } })

Vue.filter('formatDatetime', (datetime, format = 'MMMM D, YYYY HH:mm') => {
   const dayObj = dayjs(datetime)

   return dayObj.isValid() ? dayObj.format(format) : ''
})

Vue.use(PortalVue)

createInertiaApp({
  title: title => title ? `${title} | MailJournal` : 'MailJournal',
  resolve: name => import(`@/Pages/${name}`).then(module => module.default),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})
