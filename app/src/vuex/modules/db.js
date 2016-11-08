import * as types from '../mutation-types'

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
  [types.SETUP_DB] (state) {
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
  [types.ACHIEVEMENT_DB_SAVE] (state, dbToSave) {
    state.db.achievements = dbToSave
  },
  [types.AUCTION_DATA_STATUS_DB_SAVE] (state, dbToSave) {
    state.db.auctions = dbToSave
  },
  [types.ITEM_DB_SAVE] (state, dbToSave) {
    state.db.items = dbToSave
  },
  [types.BOSS_DB_SAVE] (state, dbToSave) {
    state.db.bosses = dbToSave
  },
  [types.CHARACTER_PROFILE_DB_SAVE] (state, dbToSave) {
    state.db.character_profiles = dbToSave
  },
  [types.ZONE_DB_SAVE] (state, dbToSave) {
    state.db.zones = dbToSave
  },
  [types.RECIPE_DB_SAVE] (state, dbToSave) {
    state.db.recipes = dbToSave
  }
}
export default {
  state,
  mutations
}
