import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import modules from './modules'

Vue.use(Vuex)

console.log(getters)
console.log(modules)

export default new Vuex.Store({
  getters,
  modules,
  strict: true
})
