import * as types from './types'

const actions = {
  saveSettings ({
    commit
  }, settings) {
    commit(types.SAVE, settings)
  }
}

export default actions
