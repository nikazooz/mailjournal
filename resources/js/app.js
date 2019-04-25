import Vue from 'vue'
import Inertia from 'inertia-vue'
import PortalVue from 'portal-vue'
import moment from 'moment'

Vue.config.productionTip = false

if (process.env.MIX_APP_ENV === 'production') {
    Vue.config.devtools = false
    Vue.config.debug = false
    Vue.config.silent = true
}

Vue.mixin({ methods: { route: (...args) => window.route(...args).url() } })

Vue.filter('formatDatetime', (datetime, format = 'MMMM D, YYYY HH:mm') => {
   const momentObj = moment(datetime)

   return momentObj.isValid() ? momentObj.format(format) : ''
})

Vue.use(Inertia)
Vue.use(PortalVue)

let app = document.getElementById('app')

new Vue({
  render: h => h(Inertia, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: (name) => {
        return import(`@/Pages/${name}`).then(module => module.default)
      },
    },
  })
}).$mount(app)
