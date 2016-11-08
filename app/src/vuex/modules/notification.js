import * as types from '../mutation-types'

const state = {
  bucket: []
}

const mutations = {
  [types.ADD_NOTIFICATION] (state, notification) {
    state.bucket.push(notification)
  },
  [types.REMOVE_NOTIFICATION] (state, notification) {
    let index = state.bucket.indexOf(notification)
    state.bucket.splice(index, 1)
  }
}

export default {
  state,
  mutations
}
