import * as types from './types'

const mutations = {
  [types.ADD] (state, notification) {
    state.bucket.push(notification)
  },
  [types.REMOVE] (state, notification) {
    let index = state.bucket.indexOf(notification)
    state.bucket.splice(index, 1)
  }
}

export default mutations
