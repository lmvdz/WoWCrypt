import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import App from './App'
import routes from './routes'

Vue.use(VueProgressBar, {
  debug: true,
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    time: '0.7s',
    opacity: '0.6s'
  },
  trail: '100px',
  autoRevert: true,
  location: 'top',
  inverse: false,
  rGradient: true
})

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
