import mutations from './mutations'
import actions from './actions'

const state = {
  api: {
    apikey: '',
    locale: '',
    https: '',
    region: '',
    domain: '',
    request: '',
    requestArgs: [],
    requestFields: []
  }
}
//  export
export default {
  state,
  mutations,
  actions
}
