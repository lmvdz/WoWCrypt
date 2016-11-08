<template>
  <div>
    <lookup title="Boos Lookup">
      <div>
        <container>
          <div>
            <h3>Boss ID</h3>
            <eInput autofocus @enter="getBoss(bossId)" @keyup="checkForChange" v-model="bossId" placeholder="Boss ID"></eInput>
          </div>
        </container>
        <eButtonPrimary title="Search" id="search" @clicked="getBoss(bossId)"></eButtonPrimary>
        <h2 v-if="inputHasCharacter" id="error">please enter a numeric only value</h2>
        <h3 v-if="error" id="error">{{boss.error}}</h3>
        <boss v-if="show" :bossData="boss"></boss>
      </div>
    </lookup>

    <container v-if="containsValidItems(this.bossDb)" class="bossLookupHistory">
      <div>
        <h1>History</h1>
        <ul>
          <div v-for="bossItem in bossDb">
            <li v-if="bossItem.error === undefined">
              <boss :bossData="bossItem"></boss>
            </li>
          </div>
        </ul>
      </div>
    </container>

  </div>
</template>

<script>
import Lookup from '../Lookup/Lookup'
import Container from '../Container/Container'
import EInput from '../EInput/EInput'
import EButtonPrimary from '../EButton/EButtonPrimary'
import EButtonDanger from '../EButton/EButtonDanger'
import Boss from './Boss'

export default {
  components: {
    EInput,
    EButtonDanger,
    EButtonPrimary,
    Boss,
    Container,
    Lookup
  },
  name: 'bosslookup',
  data () {
    return {
      bossDb: [],
      bossId: '',
      boss: {},
      show: false,
      error: false,
      lastSearchWasError: false,
      inputHasCharacter: false
    }
  },
  created () {
    let x = this.$store.getters.databases.bosses
    x = x.slice()
    this.bossDb = x
  },
  methods: {
    sanitizeBoss (boss) {
      let isAlreadyInDb = false
      for (var bossVar in this.bossDb) {
        if (this.bossDb[bossVar].id === boss.id) {
          isAlreadyInDb = true
        }
      }
      if (!isAlreadyInDb) {
        this.bossDb.push(boss)
        let x = this.bossDb.slice()
        this.$store.dispatch('saveDatabase', ['BOSS_DB_SAVE', x])
      }
    },
    getBossZoneName (boss) {
      let x = this.$store.getters.apiData.https + this.$store.getters.apiData.region + this.$store.getters.apiData.domain
      this.$store.dispatch('modifyAPI', ['ZONE', boss.zoneId])
      x += this.$store.getters.apiData.request
      x += '/' + this.$store.getters.apiData.requestArgs[0]
      x += '?locale=' + this.$store.getters.apiData.locale
      x += '&apikey=' + this.$store.getters.apiData.apikey
      this.$http.get(x).then((response) => {
        boss.zoneName = response.data.name
      }, (response) => {
        if (response.status === 404) {
          boss.zoneName = 'Unknown'
        } else if (response.status === 403) {
          this.boss = {'error': 'API Request Failed, check Settings'}
          this.error = this.lastSearchWasError = true
        }
      }).then(() => {
        this.show = true
        this.lastSearchWasError = false
        this.sanitizeBoss(boss)
      })
    },
    isValidItem (boss) {
      if (boss.error === undefined && boss.name !== undefined) {
        return true
      }
    },
    containsValidItems (database) {
      if (database.length > 0 && database.filter(this.isValidItem).length > 0) {
        return true
      } else {
        return false
      }
    },
    alreadyCached (boss) {
      if ('' + boss.id === this.bossId) {
        this.boss = boss
        return true
      }
    },
    checkForChange () {
      this.inputHasCharacter = isNaN(this.bossId)
      if (this.boss.id !== undefined) {
        if (this.bossDb.filter(this.alreadyCached)) {
          if (this.boss.error !== undefined) {
            this.error = '' + this.boss.id === this.bossId
            this.show = false
            return
          }
          this.show = '' + this.boss.id === this.bossId
        }
        if (this.show || !this.lastSearchWasError) {
          this.show = '' + this.boss.id === this.bossId
        } else if (this.error || this.lastSearchWasError) {
          this.error = '' + this.boss.id === this.bossId
        }
      } else {
        for (var bossVar in this.bossDb) {
          if ('' + this.bossDb[bossVar].id === this.bossId) {
            this.boss = this.bossDb[bossVar]
            this.error = false
            this.show = true
            return
          }
        }
      }
    },
    getBoss (bossId) {
      let x = this.$store.getters.apiData.https + this.$store.getters.apiData.region + this.$store.getters.apiData.domain
      this.$store.dispatch('modifyAPI', ['BOSS', bossId])
      x += this.$store.getters.apiData.request
      x += '/' + this.$store.getters.apiData.requestArgs[0]
      x += '?locale=' + this.$store.getters.apiData.locale
      x += '&apikey=' + this.$store.getters.apiData.apikey
      this.$http.get(x).then((response) => {
        this.boss = response.data
        this.boss.WoWHeadLink = 'http://www.wowhead.com/npc=' + this.boss.id
      }, (response) => {
        if (response.status === 404) {
          this.boss = {'error': 'Invalid Boss Id: ' + bossId, 'id': bossId}
          this.error = this.lastSearchWasError = true
          this.sanitizeBoss(this.boss)
        } else if (response.status === 403) {
          this.boss = {'error': 'API Request Failed, check Settings'}
          this.error = this.lastSearchWasError = true
        }
      }).then(() => {
        if (this.error === undefined) {
          this.getBossZoneName(this.boss)
        }
      })
    }
  }
}
</script>

<style scoped>
  .bossLookupHistory{
    height: 47vh;
  }
  ul{
    overflow: hidden;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
  li{
    list-style-position: inside;
    display: inline-block;
    list-style-type: none;
  }
</style>
