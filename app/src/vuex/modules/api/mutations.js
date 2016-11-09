import * as types from './types'
import settings from 'electron-settings'

const mutations = {
  [types.SETUP] (state) {
    console.log('SETUP: API ---')
    state.api.apikey = settings.getSync('settings.apikey')
    state.api.locale = 'en_GB'
    state.api.https = 'https://'
    state.api.region = settings.getSync('settings.region')
    state.api.domain = '.api.battle.net/wow'
    state.api.request = ''
    state.api.requestArgs = []
    state.api.requestFields = []
    console.log('SETUP: API --- COMPLETED')
  },
  [types.SET_KEY] (state, apiKey) {
    state.api.apikey = apiKey
  },
  [types.SET_REGION] (state, region) {
    state.api.region = region
  },
  [types.ACHIEVEMENT] (state, achievementId) {
    state.api.request = '/achievement'
    state.api.requestArgs = [achievementId]
  },
  [types.AUCTION_DATA_STATUS] (state, realmName) {
    state.api.request = '/auction/data'
    state.api.requestArgs = [realmName]
  },
  [types.BOSS_MASTER_LIST] (state) {
    state.api.request = '/boss'
  },
  [types.BOSS] (state, bossID) {
    state.api.request = '/boss'
    state.api.requestArgs = [bossID]
  },
  [types.CHALLANGE_MODE_REALM_LEADERBOARD] (state, realmName) {
    state.api.request = '/challange'
    state.api.requestArgs = [realmName]
  },
  [types.CHALLANGE_MODE_REGION_LEADERBOARD] (state) {
    state.api.request = '/challange/region'
  },
  [types.CHARACTER_PROFILE] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
  },
  [types.CHARACTER_ACHIEVEMENTS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['achievments']
  },
  [types.CHARACTER_APPEARANCE] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['appearance']
  },
  [types.CHARACTER_ACTIVITY_FEED] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['feed']
  },
  [types.CHARACTER_GUILD] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['guild']
  },
  [types.CHARACTER_HUNTER_PETS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['hunterPets']
  },
  [types.CHARACTER_ITEMS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['items']
  },
  [types.CHARACTER_MOUNTS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['mounts']
  },
  [types.CHARACTER_PETS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['pets']
  },
  [types.CHARACTER_PET_SLOTS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['petSlots']
  },
  [types.CHARACTER_PROFESSIONS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['professions']
  },
  [types.CHARACTER_PROGRESSION] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['progression']
  },
  [types.CHARACTER_PVP] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['pvp']
  },
  [types.CHARACTER_QUESTS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['progression']
  },
  [types.CHARACTER_REPUTATION] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['reputation']
  },
  [types.CHARACTER_STATISTICS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['statistics']
  },
  [types.CHARACTER_STATS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['stats']
  },
  [types.CHARACTER_TALENTS] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['talents']
  },
  [types.CHARACTER_TITLES] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.api.requestFields = ['titles']
  },
  [types.CHARACTER_AUDIT] (state, requestArgs) {
    state.api.request = '/character'
    requestArgs = requestArgs.split(',')
    state.api.requestArgs = [requestArgs[0], requestArgs[1]]
    state.requestFields = ['audit']
  },
  [types.ITEM] (state, itemId) {
    state.api.request = '/item'
    state.api.requestArgs = [itemId]
  },
  [types.BOSS] (state, bossId) {
    state.api.request = '/boss'
    state.api.requestArgs = [bossId]
  },
  [types.ZONE] (state, zoneId) {
    state.api.request = '/zone'
    state.api.requestArgs = [zoneId]
  },
  [types.RECIPE] (state, recipeId) {
    state.api.request = '/recipe'
    state.api.requestArgs = [recipeId]
  }
}

export default mutations
