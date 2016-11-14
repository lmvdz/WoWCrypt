<template>
  <div>
    <lookup title="Boos Lookup" class="lookup">
      <div>
        <container>
          <div>
            <h3>Boss ID</h3>
            <eInput autofocus @enter="get('BOSS', [bossId], boss, bossDb)" @keyup="checkForChange" v-model="bossId" placeholder="Boss ID"></eInput>
          </div>
        </container>
        <a  class="link primary" @click="get('BOSS', [bossId], boss, bossDb)">Search</a>
        <h2 v-if="inputHasCharacter" id="error">please enter a numeric only value</h2>
        <h3 v-if="error" id="error">{{boss.error}}</h3>
      </div>
    </lookup>
    <container v-if="atleastOneNonError(this.bossDb)" class="history">
      <div>
        <h1>History</h1>
        <ul>
          <div v-for="bossItem in reverse">
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
import Lookup from '../../Lookup/Lookup'
import Container from '../../Container/Container'
import EInput from '../../EInput/EInput'
import Boss from './Boss'
import $util from '../../../util.js'

export default {
  components: {
    EInput,
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
    let x = this.$store.getters.db.bosses
    x = x.slice()
    this.bossDb = x
  },
  computed: {
    reverse () {
      return this.bossDb.slice().reverse()
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
    checkForChange () {
      this.inputHasCharacter = isNaN(this.bossId)
      for (var boss in this.bossDb) {
        if ('' + this.bossDb[boss].id === this.bossId) {
          this.boss = this.bossDb[boss]
          if (this.boss.error !== undefined) {
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
    purify (data) {
      if (!$util.db.keyAlreadyExists(this.bossDb, data)) {
        this.get('ZONE', [data.zoneId], data.zoneName, this.bossDb)
        this.$nextTick(() => {
          data.WoWHeadLink = 'http://www.wowhead.com/npc=' + data.id
          $util.db.addToDb(this.bossDb, data)
          let x = this.bossDb.slice()
          this.$store.dispatch('saveDatabase', ['BOSS', x])
        })
      }
      this.show = true
      this.error = false
      this.$Progress.finish()
    },
    get (...args) {
      if (args[0] !== 'ZONE') {
        this.$Progress.start()
      }
      let modifier = [args[0], args[1][0]]
      let response
      this.$store.dispatch('modifyAPI', modifier)
      this.$store.dispatch('callAPI')
      this.$http.get(this.$store.getters.api.full).then((data) => {
        response = data.body
      }, (data) => {
        this.$Progress.fail()
        if (data.status === 404) {
          response = {error: '404'}
        } else if (data.status === 403) {
          response = {error: '403', message: 'invalid apikey?'}
        }
      }).then(() => {
        if (response.error !== undefined) {
          if (response.error === '404') {
            modifier[0] = modifier[0].toLowerCase()
            args[2] = {'error': 'Invalid ' + modifier[0].charAt(0).toUpperCase() + modifier[0].slice(1) + ' ID: ' + args[1][0], 'id': args[1][0]}
            if (!$util.db.keyAlreadyExists(args[3], args[2])) {
              $util.db.addToDb(args[3], args[2])
            }
          } else if (response.error === '403') {
            args[2] = {'error': '403: ' + response.message}
          }
          this.error = true
          this.show = false
        } else {
          args[2] = response
          if (args[0] !== 'ZONE') {
            this.purify(args[2])
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .lookup{
    float: left;
    height: 50vh;
    width: 35vw;
  }
  .history{
    float: right;
    height: 50vh;
    width: 35vw;
  }
  ul{
    height: 42vh;
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
