import * as types from './types'

const actions = {
  saveDatabase ({commit}, args) {
    switch (args[0]) {
      case 'ACHIEVEMENT':
        commit(types.ACHIEVEMENT, args[1])
        break
      case 'ITEM':
        commit(types.ITEM, args[1])
        break
      case 'BOSS':
        commit(types.BOSS, args[1])
        break
      case 'CHARACTER':
        commit(types.CHARACTER, args[1])
        break
      case 'ZONE':
        commit(types.ZONE, args[1])
        break
      case 'RECIPE':
        commit(types.RECIPE, args[1])
        break
    }
  }
}

export default actions
