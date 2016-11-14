<style scoped>
.history{
  height: 44vh;
  width: 40vw;
  top: 50%;
  bottom: 50%;
}
</style>

<template>
  <div class="">
    <lookup title="Achievement Lookup" style="height: 53vh; width: 40vw; max-height: 290px; max-width: 450px; float: left">
      <div>
        <container>
          <div>
            <h3>Achievement ID</h3>
            <eInput @enter="get('ACHIEVEMENT', [achievementId], achievement, achievements)" @keyup="checkForChange()" v-model="achievementId" placeholder="Achievement ID"></eInput>
          </div>
        </container>
        <a class="link primary" @click="get('ACHIEVEMENT', [achievementId], achievement, achievements)">Search</a>
        <h2 v-if="inputHasCharacter" id="error">please enter a numeric only value</h2>
        <h3 v-if="error" id="error">{{achievement.error}}</h3>
      </div>
    </lookup>
    <container v-if="atleastOneNonError(this.achievements)" style="height: 53vh; width: 40vw; float: right">
      <div>
        <h1>History</h1>
        <div class="table history" onmouseover="this.style.overflow='auto'" onmouseout="this.style.overflow='hidden'">
          <table id="links-list">
            <tr>
              <td v-for="ach in reverse" id="links-list-item" style="width: 39.5vw">
                <achievement v-if="ach.error === undefined" :achievementData="ach"></achievement>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import EInput from '../../EInput/EInput'
import Container from '../../Container/Container'
import Lookup from '../../Lookup/Lookup'
import Achievement from './Achievement'
import $util from '../../../util.js'

export default {
  components: {
    Achievement,
    EInput,
    Lookup,
    Container
  },
  name: 'achievementlookup',
  data () {
    return {
      achievements: [],
      achievementId: '',
      achievement: {},
      show: false,
      error: false,
      inputHasCharacter: false
    }
  },
  created () {
    let x = this.$store.getters.db.achievements
    x = x.slice()
    this.achievements = x
  },
  computed: {
    reverse () {
      return this.achievements.slice().reverse()
    }
  },
  methods: {
    atleastOneNonError (db) {
      for (var x in db) {
        if (db[x].error === undefined) {
          return true
        }
      }
      return false
    },
    purify (achievement) {
      if (!$util.db.keyAlreadyExists(this.achievements, achievement)) {
        if (achievement.reward !== undefined) {
          if (achievement.reward.includes('Rewards:')) {
            achievement.reward = achievement.reward.split('Rewards:')[1]
          } else if (achievement.reward.includes('Reward:')) {
            achievement.reward = achievement.reward.split('Reward:')[1]
          }
          if (achievement.rewardItems !== undefined) {
            achievement.rewards = []
            for (var rewardItem in achievement.rewardItems) {
              if (achievement.rewardItems[rewardItem] !== undefined) {
                var reward = achievement.rewardItems[rewardItem]
                achievement.rewards.push({'link': 'http://www.wowhead.com/item=' + reward.id, 'name': reward.name, 'quality': reward.quality})
              }
            }
          }
        }
        $util.db.addToDb(this.achievements, achievement)
        let x = this.achievements.slice()
        this.$store.dispatch('saveDatabase', ['ACHIEVEMENT', x])
      }
      this.show = true
      this.error = false
      this.$Progress.finish()
    },
    checkForChange () {
      this.inputHasCharacter = isNaN(this.achievementId)
      for (var ach in this.achievements) {
        if ('' + this.achievements[ach].id === this.achievementId) {
          this.achievement = this.achievements[ach]
          if (this.achievement.error !== undefined) {
            this.error = true
            this.show = false
          } else {
            this.error = false
            this.show = true
          }
          return
        }
      }
      this.show = false
      this.error = false
    },
    get (...args) {
      this.$Progress.start()
      let modifier = [args[0], args[1][0]]
      let response
      this.$store.dispatch('modifyAPI', modifier)
      this.$store.dispatch('callAPI')
      this.$http.get(this.$store.getters.api.full).then((data) => {
        response = data.body
      }, (data) => {
        if (data.status === 404) {
          response = {error: '404'}
        } else if (data.status === 403) {
          response = {error: '403', message: 'invalid apikey?'}
        }
        this.$Progress.fail()
      }).then(() => {
        if (response.error !== undefined) {
          if (response.error === '404') {
            modifier[0] = modifier[0].toLowerCase()
            args[2] = {'error': 'Invalid ' + modifier[0].charAt(0).toUpperCase() + modifier[0].slice(1) + ' ID: ' + args[1][0], 'id': args[1][0]}
            !$util.db.keyAlreadyExists(args[3], args[2]) ? $util.db.addToDb(args[3], args[2]) : null
          } else if (response.error === '403') {
            args[2] = {'error': '403: ' + response.message}
          }
          this.error = true
          this.show = false
        } else {
          args[2] = response
          this.purify(args[2])
        }
      })
    }
  }
}
</script>
