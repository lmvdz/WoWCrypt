<template lang="html">
  <lookup>
    <div>
      <container>
        <div class="">
          <h3>Guild Realm</h3>
          <eInput autofocus @enter="getGuild(guildRealm, guildName)" @keyup="checkForChange" v-model="guildRealm" placeholder="Guild Realm"></eInput>
        </div>
      </container>
      <container>
        <div class="">
          <h3>Guild Name</h3>
          <eInput autofocus @enter="getGuild(guildRealm, guildName)" @keyup="checkForChange" v-model="guildName" placeholder="Guild Name"></eInput>
        </div>
      </container>
      <a  class="link primary" @click="getGuild(guildRealm, guildName)">Search</a>
      <h2 v-if="inputHasNumber" id="error">please enter non numeric values</h2>
      <h3 v-if="error" id="error">{{guild.error}}</h3>
      <guild v-if="show" :guildData="guild"></boss>
    </div>
  </lookup>
</template>

<script>
import Lookup from '../../Lookup/Lookup'
import Container from '../../Container/Container'
import EInput from '../../EInput/EInput'
import Guild from './Guild'

export default {
  components: {
    EInput,
    Guild,
    Container,
    Lookup
  },
  name: 'guildlookup',
  data () {
    return {
      guildDb: [],
      guildRealm: '',
      guildName: '',
      guild: {},
      show: false,
      error: false,
      inputHasNumber: false
    }
  },
  created () {
    let x = this.$store.getters.db.guilds
    x = x.slice()
    this.guildDb = x
  },
  methods: {
    isNameAlreadyInDb (db, name, realm) {
      let inDb = false
      for (var x in db) {
        if (db[x].name === name && db[x].realm === realm) {
          inDb = true
        }
      }
      return inDb
    },
    isAlreadyInDb (db, data) {
      let inDb = false
      for (var x in db) {
        if (db[x].name === data.name) {
          inDb = true
        }
      }
      return inDb
    },
    getFromDb (db, name, realm) {
      for (var x in db) {
        if (db[x].name === name && db[x].realm === realm) {
          return db[x]
        }
      }
      return null
    },
    tryToPushToDatabase (db, guild) {
      if (!this.isAlreadyInDb(db, guild)) {
        db.push(guild)
        let x = db.slice()
        this.$store.dispatch('saveDatabase', ['GUILD', x])
        return true
      }
      return false
    },
    purify (guild) {
      //  get the guild's other data
      //  add other functions from a constant function file
      if (this.tryToPushToDatabase(this.guildDb, guild)) {
        console.log('pushed guild with name/realm: \'\'' + guild.name + '/' + guild.realm + '\'\' to the database')
      }
    },
    checkForChange () {
      //  is the guildName or guildRealm Not Not A Number (NaN)
      if (!isNaN(this.guildName) || !isNaN(this.guildRealm)) {
        this.inputHasNumber = true
        return
      } else {
        this.inputHasNumber = false
      }
      //  was the last searched guildName & guildRealm is equal to the current inputs
      if (this.guild.name === this.guildName && this.guild.realm === this.guildRealm) {
        if (this.guild.error === undefined) {
          this.error = false
          this.show = true
        } else if (this.guild.error !== undefined) {
          this.error = true
          this.show = false
        }
        return
      } else {
        this.error = false
        this.show = false
      }
      //  is the current guildName + guildRealm already stored in the Db
      if (this.isNameAlreadyInDb(this.guildDb, this.guildName, this.guildRealm)) {
        this.guild = this.getFromDb(this.guildDb, this.guildName, this.guildRealm)
        this.error = false
        this.show = true
      }
    },
    getGuild (realm, name) {
      if (realm !== undefined && name !== undefined) {
        let y = this.$store.getters.api
        let x = y.https + y.region + y.domain
        this.$store.dispatch('modifyAPI', ['GUILD', realm, name])
        x += y.request
        x += '/' + y.requestArgs[0] + '/' + y.requestArgs[1]
        x += '?locale=' + y.locale
        x += '&apikey=' + y.apikey
        this.$http.get(x).then((response) => {
          this.guild = response.data
          this.show = true
          this.purify(this.guild)
        }, (response) => {
          if (response.status === 404) {
            this.guild = {'error': 'Guild Lookup Failed: ' + realm + ' - ' + name, 'name': name, 'realm': realm}
            this.show = false
            this.error = true
          } else if (response.status === 403) {
            this.guild = {'error': 'API Request Failed, check Settings'}
            this.error = true
            this.show = false
          }
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
