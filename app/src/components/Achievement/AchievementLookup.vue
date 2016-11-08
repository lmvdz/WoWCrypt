<style scoped>
  #error {
    color: #e04b4b;
  }
</style>

<template>
  <div class="container">
    <h1>Achievement Lookup</h1>
    <router-link to="/home"><eButtonDanger title="Home"></eButtonDanger></router-link>
    <div class="container">
      <h3>Achievement ID</h3>
      <eInput @enter="getAchievement(achievementId)" @keyup="checkForChange" v-model="achievementId" placeholder="Achievement ID"></eInput>
    </div>
    <eButtonPrimary title="Search" id="search" @clicked="getAchievement(achievementId)"></eButtonPrimary>
    <h2 v-if="inputHasCharacter" id="error">please enter a numeric only value</h2>
    <h3 v-if="error" id="error">{{achievement.error}}</h3>
    <achievement v-if="show" :achievementData="achievement"></achievement>
  </div>
</template>

<script>
import Achievement from './Achievement'
import EButtonDanger from '../EButton/EButtonDanger'
import EButtonPrimary from '../EButton/EButtonPrimary'
import EInput from '../EInput/EInput'
export default {
  components: {
    Achievement,
    EButtonDanger,
    EButtonPrimary,
    EInput
  },
  name: 'achievementlookup',
  data () {
    return {
      achievements: [],
      achievementId: '',
      achievement: {},
      show: false,
      error: false,
      lastSearchWasError: false,
      inputHasCharacter: false
    }
  },
  created () {
    let x = this.$store.getters.databases.achievements
    x = x.slice()
    this.achievements = x
  },
  methods: {
    purifyAchievement (achievement) {
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
      let isAlreadyInDb = false
      for (var ach in this.achievements) {
        if (this.achievements[ach].id === achievement.id) {
          isAlreadyInDb = true
        }
      }
      if (!isAlreadyInDb) {
        this.achievements.push(achievement)
        let x = this.achievements.slice()
        this.$store.dispatch('saveDatabase', ['ACHIEVEMENT_DB_SAVE', x])
      }
    },
    alreadyCached (achievement) {
      if ('' + achievement.id === this.achievementId) {
        this.achievement = achievement
        return true
      }
    },
    checkForChange () {
      this.inputHasCharacter = isNaN(this.achievementId)
      if (this.achievement.id !== undefined) {
        if (this.achievements.filter(this.alreadyCached)) {
          if (this.achievement.error !== undefined) {
            this.error = '' + this.achievement.id === this.achievementId
            this.show = false
            return
          }
          this.show = '' + this.achievement.id === this.achievementId
        }
        if (this.show || !this.lastSearchWasError) {
          this.show = '' + this.achievement.id === this.achievementId
        } else if (this.error || this.lastSearchWasError) {
          this.error = '' + this.achievement.id === this.achievementId
        }
      } else {
        for (var ach in this.achievements) {
          if ('' + this.achievements[ach].id === this.achievementId) {
            this.achievement = this.achievements[ach]
            this.error = false
            this.show = true
            return
          }
        }
      }
    },
    getAchievement (achievementId) {
      let x = this.$store.getters.apiData.https + this.$store.getters.apiData.region + this.$store.getters.apiData.domain
      this.$store.dispatch('modifyAPI', ['ACHIEVEMENT', achievementId])
      x += this.$store.getters.apiData.request
      x += '/' + this.$store.getters.apiData.requestArgs[0]
      x += '?locale=' + this.$store.getters.apiData.locale
      x += '&apikey=' + this.$store.getters.apiData.apikey
      this.$http.get(x).then((response) => {
        this.achievement = response.data
        this.show = true
        this.lastSearchWasError = this.error = false
        this.purifyAchievement(this.achievement)
      }, (response) => {
        if (response.status === 404) {
          this.achievement = {'error': 'Invalid Achievemnt ID: ' + achievementId, 'id': achievementId}
          this.error = this.lastSearchWasError = true
          let isAlreadyInDb = false
          for (var ach in this.achievements) {
            if (this.achievements[ach].id === this.achievement.id) {
              isAlreadyInDb = true
            }
          }
          if (!isAlreadyInDb) {
            this.achievements.push(this.achievement)
          }
        } else if (response.status === 403) {
          this.achievement = {'error': 'API Request Failed, check Settings'}
          this.error = this.lastSearchWasError = true
        }
      })
    }
  }
}
</script>
