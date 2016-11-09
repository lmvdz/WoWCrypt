import mutations from './mutations'
import actions from './actions'

const state = {
  db: {
    achievements: [],
    auctions: [],
    items: [],
    bosses: [],
    character_profiles: [],
    zones: [],
    recipes: [],
    guilds: [],
    mounts: [],
    pets: [],
    pvp: [],
    realms: []
  }
}

export default {
  state,
  mutations,
  actions
}
