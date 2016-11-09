import * as api from '../api/types'
import * as db from '../db/types'
import * as settings from '../settings/types'

const actions = {
  setup ({ commit }) {
    console.log('SETUP: ---- INITIATED')
    commit(settings.SETUP)
    commit(api.SETUP)
    commit(db.SETUP)
    console.log('SETUP: ---- TERMINATED')
  }
}

export default actions
