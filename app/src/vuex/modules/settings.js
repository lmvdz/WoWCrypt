import * as types from '../mutation-types'
import settings from 'electron-settings'

const state = {
  settings: {}
}

const mutations = {
  [types.SETUP_SETTINGS] (state) {
    console.log('SETUP: SETTINGS ---')
    settings.defaults({
      settings: {
        apikey: '',
        region: 'EU'
      }
    })
    var load = settings.getSync()
    if (load.settings === undefined) {
      console.log('SETUP: SETTINGS --- NEW SETTINGS FILE')
      settings.applyDefaultsSync()
      load = settings.getSync()
    } else {
      console.log('SETUP: SETTINGS --- LOAD FROM FILE')
    }
    state.settings = load.settings
    console.log('SETUP: SETTINGS --- COMPLETED')
  },
  [types.SAVE_SETTINGS] (state, save) {
    console.log('SETTINGS: BEGIN SAVE')
    state.settings = save
    settings.setSync('settings', save)
    console.log('SETTINGS: END SAVE')
  }
}

export default {
  state,
  mutations
}
