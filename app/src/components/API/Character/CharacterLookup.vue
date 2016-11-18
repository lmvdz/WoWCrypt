<style scoped>
.lookup {
  float: left;
  width: 45vw;
  height: 60vh;
}

.history {
  float: right;
  width: 35vw;
  height: 60vh;
}

ul {
  height: 52vh;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

li {
  list-style-position: inside;
  display: inline-block;
  list-style-type: none;
}

</style>

<template>
<div>
  <lookup title="Character Lookup" class="lookup">
    <div>
      <container>
        <div class="">
          <h3>Realm</h3>
          <eInput @enter="get('CHARACTER', [characterRealm, characterName], character, characters)" @keyup="checkForChange" v-model="characterRealm" placeholder="Character Realm"></eInput>
        </div>
      </container>
      <container>
        <div>
          <h3>Name</h3>
          <eInput @enter="get('CHARACTER', [characterRealm, characterName], character, characters)" @keyup="checkForChange" v-model="characterName" placeholder="Character Name"></eInput>
        </div>
      </container>
      <a class="link primary" @click="get('CHARACTER', [characterRealm, characterName], character, characters)">Search</a>
      <h2 v-if="inputHasNumber" id="error">please enter non-numeric values</h2>
      <h3 v-if="error" id="error">{{character.error}}</h3>
    </div>
  </lookup>
  <container v-if="atleastOneNonError(this.characters)" class="history">
    <div>
      <h1>History</h1>
      <ul>
        <div v-for="characterVar in characters">
          <li v-if="characterVar.error === undefined">
            <character :useButton="false" :characterData="characterVar"></character>
          </li>
        </div>
      </ul>
    </div>
  </container>
</div>

</template>

<script>
import EInput from '../../EInput/EInput'
import Lookup from '../../Lookup/Lookup'
import Container from '../../Container/Container'
import Character from './Character'
import $util from '../../../util.js'

export default {
  components: {
    Lookup,
    Container,
    Character,
    EInput
  },
  name: 'characterLookup',
  data () {
    return {
      characters: [],
      characterRealm: '',
      characterName: '',
      character: {},
      show: false,
      error: false,
      lastSearchWasError: false,
      inputHasNumber: false
    }
  },
  created () {
    let x = this.$store.getters.db.character_profiles
    x = x.slice()
    this.characters = x
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
    purify (data) {
      if (!$util.db.keyAlreadyExists(this.characters, data)) {
        // class
        data.classColor = $util.resource.classColor(data.class)
        data.classAsName = $util.resource.className(data.class)
          //  gender
        data.genderColor = $util.resource.genderColor(data.gender)
        data.genderName = $util.resource.genderName(data.gender)
          //  race
        data.raceColor = $util.resource.raceColor(data.race)
        data.raceName = $util.resource.raceName(data.race)
        $util.db.addToDb(this.characters, data)
        let x = this.characters.slice()
        this.$store.dispatch('saveDatabase', ['CHARACTER', x])
      }
      this.show = true
      this.error = false
      this.$pb.finish('router')
    },
    checkForChange () {
      //  input has numbers?
      this.inputHasNumber = (!isNaN(this.characterRealm) || !isNaN(this.characterName)) && (this.characterRealm !== '' || this.characterName !== '')
        //  input already cached?
      if (this.characterName !== '' && this.characterRealm !== '') {
        for (var characterVar in this.characters) {
          if (this.characters[characterVar].name.toLowerCase() === this.characterName.toLowerCase() && this.characters[characterVar].realm.toLowerCase() === this.characterRealm.toLowerCase()) {
            this.character = this.characters[characterVar]
            if (this.character.error === undefined) {
              this.error = false
              this.show = true
            } else {
              this.error = true
              this.show = false
            }
            return
          } else {
            this.error = false
            this.show = false
          }
        }
      } else {
        this.error = false
        this.show = false
      }
    },
    get (...args) {
      if (args[1][0] !== undefined && args[1][1] !== undefined) {
        this.$pb.start('router')
        let response
        let modifier = [args[0],
          [args[1][0], args[1][1]]
        ]
        console.log(modifier)
        this.$store.dispatch('modifyAPI', modifier)
        this.$store.dispatch('callAPI')
        this.$http.get(this.$store.getters.api.full).then((data) => {
          response = data.body
        }, (data) => {
          this.$pb.fail('router')
          if (data.status === 404) {
            response = {
              error: '404'
            }
          } else if (data.status === 403) {
            response = {
              error: '403',
              message: 'invalid apikey?'
            }
          }
        }).then(() => {
          if (response.error !== undefined) {
            if (response.error === '404') {
              modifier[0] = modifier[0].toLowerCase()
              args[2] = {
                'error': 'Invalid ' + modifier[0].charAt(0).toUpperCase() + modifier[0].slice(1) + ' Name: ' + args[1][1] + 'Realm: ' + args[1][0],
                'name': args[1][1],
                'realm': args[1][0]
              }
              if (!$util.db.keyAlreadyExists(args[3], args[2])) {
                $util.db.addToDb(args[3], args[2])
              }
            } else if (response.error === '403') {
              args[2] = {
                'error': '403: ' + response.message
              }
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
}

</script>
