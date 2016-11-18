import * as types from './types'

const actions = {
  callAPI ({
    commit
  }, args) {
    commit(types.CALL)
  },
  modifyAPI ({
    commit
  }, args) {
    let requestArgs
    switch (args[0]) {
      case 'SET_REGION':
        commit(types.SET_REGION, args[1])
        break
      case 'SET_KEY':
        commit(types.SET_KEY, args[1])
        break
      case 'ACHIEVEMENT':
        commit(types.ACHIEVEMENT, args[1])
        break
      case 'AUCTION_DATA_STATUS':
        commit(types.AUCTION_DATA_STATUS, args[1])
        break
      case 'ITEM':
        commit(types.ITEM, args[1])
        break
      case 'BOSS':
        commit(types.BOSS, args[1])
        break
      case 'CHARACTER':
        requestArgs = args[1] + ',' + args[2]
        commit(types.CHARACTER, requestArgs)
        break
      case 'ZONE':
        commit(types.ZONE, args[1])
        break
      case 'RECIPE':
        commit(types.RECIPE, args[1])
        break
      case 'Guild':
        requestArgs = args[1] + ',' + args[2]
        commit(types.RECIPE, requestArgs)
        break
      default:
        console.log('error: unknown request type')
    }
  }
}
export default actions
