import * as types from './types'

const state = {
  db: {
    achievements: [],
    auctions: [],
    items: [],
    bosses: [],
    character_profiles: [],
    zones: [],
    recipes: []
  }
}
const mutations = {
  [types.SETUP] (state) {
    console.log('SETUP: DATABASE ---')
    state.db.achievements = []
    state.db.auctions = []
    state.db.items = []
    state.db.bosses = []
    state.db.character_profiles = []
    state.db.zones = []
    state.db.recipe = []
    console.log('SETUP: DATABASES --- EMPTY')
    console.log('SETUP: DATABASE --- COMPLETED')
  },
  [types.ACHIEVEMENT] (state, dbToSave) {
    state.db.achievements = dbToSave
  },
  [types.AUCTION_DATA_STATUS] (state, dbToSave) {
    state.db.auctions = dbToSave
  },
  [types.ITEM] (state, dbToSave) {
    state.db.items = dbToSave
  },
  [types.BOSS] (state, dbToSave) {
    state.db.bosses = dbToSave
  },
  [types.CHARACTER_PROFILE] (state, dbToSave) {
    state.db.character_profiles = dbToSave
  },
  [types.ZONE] (state, dbToSave) {
    state.db.zones = dbToSave
  },
  [types.RECIPE] (state, dbToSave) {
    state.db.recipes = dbToSave
  }
}

//  actions
//    functions
const saveDatabase = ({commit}, args) => {
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
const actions = {
  saveDatabase
}
export default {
  state,
  mutations,
  actions
}
