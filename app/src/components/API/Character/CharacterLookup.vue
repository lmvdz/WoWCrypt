<style scoped>
.characterFound{
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  height: 35vh;
}
.characterLookup{
  float: left;
  width: 50vh;
}
.characterHistory{
  float: right;
  width: 50vh;
  height: 62.5vh;
}
ul{
  height: 55.4vh;
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

<template>
  <div>
    <lookup title="Character Lookup" class="characterLookup">
      <div>

        <container>

          <div class="">
            <h3>Realm</h3>
            <eInput @enter="getCharacter(characterRealm, characterName)" @keyup="checkForChange" v-model="characterRealm" placeholder="Character Realm"></eInput>
          </div>

        </container>

        <container>

          <div>
            <h3>Name</h3>
            <eInput @enter="getCharacter(characterRealm, characterName)" @keyup="checkForChange" v-model="characterName" placeholder="Character Name"></eInput>
          </div>

        </container>

        <eButtonPrimary title="Search" id="search" @clicked="getCharacter(characterRealm, characterName)"></eButtonPrimary>
        <h2 v-if="inputHasNumber" id="error">please enter non-numeric values</h2>
        <h3 v-if="error" id="error">{{character.error}}</h3>
        <div v-if="show" class="characterFound">
          <character :useButton="true" :characterData="character"></character>
        </div>
      </div>
    </lookup>
    <container v-if="containsValidItems(this.characters)" class="characterHistory">

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
import EButtonDanger from '../../EButton/EButtonDanger'
import EButtonPrimary from '../../EButton/EButtonPrimary'
import EInput from '../../EInput/EInput'
import Lookup from '../../Lookup/Lookup'
import Container from '../../Container/Container'
import Character from './Character'

export default {
  components: {
    Lookup,
    Container,
    Character,
    EButtonDanger,
    EButtonPrimary,
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
    let x = this.$store.getters.databases.character_profiles
    x = x.slice()
    this.characters = x
  },
  methods: {
    isValidItem (item) {
      if (item.error === undefined && item.name !== undefined) {
        console.log(item.name)
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
    setupRaceName (characterRace) {
      switch (characterRace) {
        case 1:
          return 'Human'
        case 2:
          return 'Orc'
        case 3:
          return 'Dwarf'
        case 4:
          return 'Undead'
        case 5:
          return 'Night Elf'
        case 6:
          return 'Tauren'
        case 7:
          return 'Gnome'
        case 8:
          return 'Troll'
        case 9:
          return 'Goblin'
        case 10:
          return 'Blood Elf'
        case 11:
          return 'Draenei'
        case 22:
          return 'Worgen'
        case 24:
        case 25:
        case 26:
          return 'Pandaren'
      }
    },
    setupRaceColor (characterRace) {
      switch (characterRace) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 11:
        case 22:
        case 25:
          return '#0066ff'
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 10:
        case 26:
          return '#ff0000'
        case 24:
          return '#ffff00'
      }
    },
    setupGenderName (characterGender) {
      switch (characterGender) {
        case 0:
          return 'Unknown'
        case 1:
          return 'Male'
        case 2:
          return 'Female'
      }
    },
    setupGenderColor (characterGender) {
      switch (characterGender) {
        case 1:
          return '#bbbbbb'
        case 2:
          return '#000aff'
        case 3:
          return '#ff00bf'
      }
    },
    setupClassColor (characterClass) {
      switch (characterClass) {
        case 1:
          return '#C79C6E'
        case 2:
          return '#F58CBA'
        case 3:
          return '#ABD473'
        case 4:
          return '#FFF569'
        case 5:
          return '#FFFFFF'
        case 6:
          return '#C41F3B'
        case 7:
          return '#0070DE'
        case 8:
          return '#69CCF0'
        case 9:
          return '#9482C9'
        case 10:
          return '#00FF96'
        case 11:
          return '#FF7D0A'
        case 12:
          return '#A330C9'
        default:
          return '#EEEEEE'
      }
    },
    setupClassName (characterClass) {
      switch (characterClass) {
        case 1:
          return 'Warrior'
        case 2:
          return 'Paladin'
        case 3:
          return 'Hunter'
        case 4:
          return 'Rogue'
        case 5:
          return 'Priest'
        case 6:
          return 'Death Knight'
        case 7:
          return 'Shaman'
        case 8:
          return 'Mage'
        case 9:
          return 'Warlock'
        case 10:
          return 'Monk'
        case 11:
          return 'Druid'
        case 12:
          return 'Demon Hunter'
        default:
          return 'Unknown'
      }
    },
    sanitizeCharacter (character) {
      // class
      character.classColor = this.setupClassColor(character.class)
      character.classAsName = this.setupClassName(character.class)
      //  gender
      character.genderColor = this.setupGenderColor(character.gender)
      character.genderName = this.setupGenderName(character.gender)
      //  race
      character.raceColor = this.setupRaceColor(character.race)
      character.raceName = this.setupRaceName(character.race)
      let isAlreadyInDb = false
      for (var characterVar in this.characters) {
        if (this.characters[characterVar].name === character.name && this.characters[characterVar].realm === character.realm) {
          isAlreadyInDb = true
        }
      }
      if (!isAlreadyInDb) {
        this.characters.push(character)
        let x = this.characters.slice()
        this.$store.dispatch('saveDatabase', ['CHARACTER_PROFILE_DB_SAVE', x])
      }
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
    getCharacter (characterRealm, characterName) {
      if (characterRealm !== undefined && characterName !== undefined) {
        let x = this.$store.getters.apiData.https + this.$store.getters.apiData.region + this.$store.getters.apiData.domain
        this.$store.dispatch('modifyAPI', ['CHARACTER_PROFILE', characterRealm, characterName])
        x += this.$store.getters.apiData.request
        x += '/' + this.$store.getters.apiData.requestArgs[0] + '/' + this.$store.getters.apiData.requestArgs[1]
        x += '?locale=' + this.$store.getters.apiData.locale
        x += '&apikey=' + this.$store.getters.apiData.apikey
        this.$http.get(x).then((response) => {
          this.character = response.data
          this.show = true
          this.lastSearchWasError = false
          this.sanitizeCharacter(this.character)
          console.log(this.character.gender)
        }, (response) => {
          if (response.status === 404) {
            this.character = {'error': 'Character Lookup Failed: ' + this.characterName + ' - ' +
                              this.characterRealm, 'name': this.characterName, 'realm': this.characterRealm}
            this.show = false
            this.error = this.lastSearchWasError = true
            let isAlreadyInDb = false
            for (var characterVar in this.characters) {
              if (this.characters[characterVar].name === this.characterName && this.characters[characterVar].realm === this.characterRealm) {
                isAlreadyInDb = true
              }
            }
            if (!isAlreadyInDb) {
              this.characters.push(this.character)
            }
          } else if (response.status === 403) {
            this.character = {'error': 'API Request Failed, check Settings'}
            this.error = this.lastSearchWasError = true
          }
        })
      }
    }
  }
}
</script>
