import * as types from './types'

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
    state.db.guilds = []
    state.db.mounts = []
    state.db.pets = []
    state.db.pvp = []
    state.db.realms = []
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
  [types.CHARACTER] (state, dbToSave) {
    state.db.character_profiles = dbToSave
  },
  [types.ZONE] (state, dbToSave) {
    state.db.zones = dbToSave
  },
  [types.RECIPE] (state, dbToSave) {
    state.db.recipes = dbToSave
  },
  [types.GUILD] (state, dbToSave) {
    state.db.guilds = dbToSave
  },
  [types.MOUNT] (state, dbToSave) {
    state.db.mounts = dbToSave
  },
  [types.PET] (state, dbToSave) {
    state.db.pets = dbToSave
  },
  [types.PVP] (state, dbToSave) {
    state.db.pvp = dbToSave
  },
  [types.REALM] (state, dbToSave) {
    state.db.realms = dbToSave
  }
}

export default mutations
