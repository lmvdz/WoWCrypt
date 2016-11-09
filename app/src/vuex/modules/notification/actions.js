import * as types from './types'

const actions = {
  addNotification ({ commit }, notification) {
    commit(types.ADD, notification)
  },
  removeNotification ({ commit }, notification) {
    commit(types.REMOVE, notification)
  }
}

export default actions
