import Vue from 'vue'
import { InertiaApp } from '@inertiajs/inertia-vue'
import PortalVue from 'portal-vue'
import dayjs from 'dayjs'

Vue.config.productionTip = false

if (process.env.MIX_APP_ENV === 'production') {
    Vue.config.devtools = false
    Vue.config.debug = false
    Vue.config.silent = true
}

Vue.mixin({ methods: { route: (...args) => window.route(...args).url() } })

Vue.filter('formatDatetime', (datetime, format = 'MMMM D, YYYY HH:mm') => {
   const dayObj = dayjs(datetime)

   return dayObj.isValid() ? dayObj.format(format) : ''
})

Vue.use(InertiaApp)
Vue.use(PortalVue)

let app = document.getElementById('app')

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
    },
  })
}).$mount(app)
