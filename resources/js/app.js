import Inertia from 'inertia-vue'
import PortalVue from 'portal-vue'
import Vue from 'vue'
import moment from 'moment'

Vue.config.productionTip = false
Vue.mixin({ methods: { route: window.route } })
Vue.filter('formatDatetime', (datetime, format = 'MMMM D, YYYY HH:mm') => {
   const momentObj = moment(datetime)

   return momentObj.isValid() ? momentObj.format(format) : ''
})
Vue.use(PortalVue)

let app = document.getElementById('app')

new Vue({
  render: h => h(Inertia, {
    props: {
      component: app.dataset.component,
      props: JSON.parse(app.dataset.props),
      resolveComponent: (component) => {
        return import(`@/Pages/${component}`).then(module => module.default)
      },
    },
  }),
}).$mount(app)
