import * as types from './types'

//  state
const state = {
  bucket: []
}

//  mutations
const mutations = {
  [types.ADD] (state, notification) {
    state.bucket.push(notification)
  },
  [types.REMOVE] (state, notification) {
    let index = state.bucket.indexOf(notification)
    state.bucket.splice(index, 1)
  }
}

//  actions
const addNotification = ({ commit }, notification) => {
  commit(types.ADD, notification)
}
const removeNotification = ({ commit }, notification) => {
  commit(types.REMOVE, notification)
}
const actions = {
  addNotification,
  removeNotification
}

//  export
export default {
  state,
  mutations,
  actions
}
