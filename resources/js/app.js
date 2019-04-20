import Inertia from 'inertia-vue'
import PortalVue from 'portal-vue'
import Vue from 'vue'
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

Vue.use(PortalVue)

let app = document.getElementById('app')

new Vue({
  render: h => h(Inertia, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: (component) => {
        return import(`@/Pages/${component}`).then(module => module.default)
      },
    },
  }),
}).$mount(app)
