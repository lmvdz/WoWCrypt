import * as api from '../api/types'
import * as db from '../db/types'
import * as settings from '../settings/types'
//  actions
//    functions
const setup = ({ commit }) => {
  console.log('SETUP: ---- INITIATED')
  commit(settings.SETUP)
  commit(api.SETUP)
  commit(db.SETUP)
  console.log('SETUP: ---- TERMINATED')
}
const actions = {
  setup
}

//  export
export default {
  actions
}
