import mutations from './mutations'
import actions from './actions'

const state = {
  settings: {
    apikey: '',
    region: ''
  }
}

export default {
  state,
  mutations,
  actions
}
