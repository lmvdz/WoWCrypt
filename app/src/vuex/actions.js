import * as types from './mutation-types'

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}
export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}
//  notification
export const addNotification = ({ commit }, notification) => {
  commit(types.ADD_NOTIFICATION, notification)
}
export const removeNotification = ({ commit }, notification) => {
  commit(types.REMOVE_NOTIFICATION, notification)
}
//  setup
export const setup = ({ commit }) => {
  console.log('SETUP: ---- INITIATED')
  commit(types.SETUP_SETTINGS)
  commit(types.SETUP_API)
  commit(types.SETUP_DB)
  console.log('SETUP: ---- TERMINATED')
}
//  settings
export const saveSettings = ({commit}, settings) => {
  commit(types.SAVE_SETTINGS, settings)
}
// database
export const saveDatabase = ({commit}, args) => {
  switch (args[0]) {
    case 'ACHIEVEMENT_DB_SAVE':
      commit(types.ACHIEVEMENT_DB_SAVE, args[1])
      break
    case 'ITEM_DB_SAVE':
      commit(types.ITEM_DB_SAVE, args[1])
      break
    case 'BOSS_DB_SAVE':
      commit(types.BOSS_DB_SAVE, args[1])
      break
    case 'CHARACTER_PROFILE_DB_SAVE':
      commit(types.CHARACTER_PROFILE_DB_SAVE, args[1])
      break
    case 'ZONE_DB_SAVE':
      commit(types.ZONE_DB_SAVE, args[1])
      break
    case 'RECIPE_DB_SAVE':
      commit(types.RECIPE_DB_SAVE, args[1])
      break
  }
}
//  api
export const modifyAPI = ({commit}, args) => {
  switch (args[0]) {
    case 'SET_API_REGION':
      commit(types.SET_API_REGION, args[1])
      break
    case 'SET_API_KEY':
      commit(types.SET_API_KEY, args[1])
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
    case 'CHARACTER_PROFILE':
      let requestArgs = args[1] + ',' + args[2]
      commit(types.CHARACTER_PROFILE, requestArgs)
      break
    case 'ZONE':
      commit(types.ZONE, args[1])
      break
    case 'RECIPE':
      commit(types.RECIPE, args[1])
      break
    default:
      console.log('error: unknown request type')
  }
}
