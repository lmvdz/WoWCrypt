import * as types from '../mutation-types'

const state = {
  db: {
    achievements: [],
    auctions: [],
    items: [],
    bosses: [],
    character_profiles: [],
    zones: []
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
    console.log('SETUP: DATABASES --- SET & EMPTIED')
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
  }
}
export default {
  state,
  mutations
}
