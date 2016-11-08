<style scoped>
  .wowItemLookup{
    height: 50%;
  }
  .itemLookupHistory{
    height: 39vh;
  }
  ul{
    height: 31vh;
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
  <div class="">
    <lookup title="Item Lookup" class="wowItemLookup">
      <div>
        <container>
          <div>
            <h3>Item ID</h3>
            <eInput @enter="getItem(itemId)" @keyup="checkForChange" v-model="itemId" placeholder="Item ID"></eInput>
          </div>
        </container>
        <eButtonPrimary title="Search" id="search" @clicked="getItem(itemId)"></eButtonPrimary>
        <wowItem class="wowItem" v-if="show" :itemData="item"></wowItem>
        <h2 v-if="inputHasCharacter" id="error">please enter a numeric only value</h2>
        <h3 v-if="error" id="error">{{item.error}}</h3>
      </div>
    </lookup>
    <container v-if="containsValidItems(this.itemDb)" class="itemLookupHistory">
      <div>
        <h1>History</h1>
        <ul>
          <div v-for="itm in itemDb">
            <li v-if="itm.error === undefined">
              <wowItem class="wowItem" :itemData="itm"></wowItem>
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
import EButtonPrimary from '../EButton/EButtonPrimary'
import EButtonDanger from '../EButton/EButtonDanger'
import EInput from '../EInput/EInput'
import WowItem from './WowItem'

export default {
  components: {
    EButtonPrimary,
    EButtonDanger,
    EInput,
    WowItem,
    Container,
    Lookup
  },
  name: 'wowitemlookup',
  data () {
    return {
      itemDb: [],
      itemId: '',
      item: {},
      show: false,
      error: false,
      lastSearchWasError: false,
      inputHasCharacter: false
    }
  },
  created () {
    let x = this.$store.getters.databases.items
    x = x.slice()
    this.itemDb = x
  },
  methods: {
    isValidItem (item) {
      if (item.error === undefined && item.name !== undefined) {
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
    alreadyCached (item) {
      if ('' + item.id === this.itemId) {
        this.item = item
        return true
      }
    },
    checkForChange () {
      this.inputHasCharacter = isNaN(this.itemId)
      if (this.item.id !== undefined) {
        if (this.itemDb.filter(this.alreadyCached)) {
          if (this.item.error !== undefined) {
            this.error = '' + this.item.id === this.itemId
            this.show = false
            return
          }
          this.show = '' + this.item.id === this.itemId
        }
        if (this.show || !this.lastSearchWasError) {
          this.show = '' + this.item.id === this.itemId
        } else if (this.error || this.lastSearchWasError) {
          this.error = '' + this.item.id === this.itemId
        }
      } else {
        for (var itemVar in this.itemDb) {
          if ('' + this.itemDb[itemVar].id === this.itemDb) {
            this.item = this.itemDb[itemVar]
            this.error = false
            this.show = true
            return
          }
        }
      }
    },
    getColor (quality) {
      switch (quality) {
        case '0':
          return '#333333'
        case 1:
          return '#ededed'
        case 2:
          return '#0ce800'
        case 3:
          return '#0075ff'
        case 4:
          return '#8700ff'
        case 5:
          return '#f99500'
        case 6:
          return '#ffbf00'
        case 7:
          return '#ffe600'
        default:
          return ''
      }
    },
    sanitizeItem (item) {
      item.WoWHeadLink = 'http://www.wowhead.com/item=' + item.id
      item.qualityColor = this.getColor(item.quality)
      let isAlreadyInDb = false
      for (var itemVar in this.itemDb) {
        if (this.itemDb[itemVar].id === item.id) {
          isAlreadyInDb = true
        }
      }
      if (!isAlreadyInDb) {
        this.itemDb.push(item)
        let x = this.itemDb.slice()
        this.$store.dispatch('saveDatabase', ['ITEM_DB_SAVE', x])
      }
    },
    getItem (itemId) {
      let x = this.$store.getters.apiData.https + this.$store.getters.apiData.region + this.$store.getters.apiData.domain
      this.$store.dispatch('modifyAPI', ['ITEM', itemId])
      x += this.$store.getters.apiData.request
      x += '/' + this.$store.getters.apiData.requestArgs[0]
      x += '?locale=' + this.$store.getters.apiData.locale
      x += '&apikey=' + this.$store.getters.apiData.apikey
      this.$http.get(x).then((response) => {
        this.item = response.data
        this.show = true
        this.lastSearchWasError = false
        this.sanitizeItem(this.item)
      }, (response) => {
        if (response.status === 404) {
          this.item = {'error': 'Invalid Item Id: ' + itemId, 'id': itemId}
          this.error = this.lastSearchWasError = true
          let isAlreadyInDb = false
          for (var itemVar in this.itemDb) {
            if (this.itemDb[itemVar].id === this.item.id) {
              isAlreadyInDb = true
            }
          }
          if (!isAlreadyInDb) {
            this.itemDb.push(this.item)
          }
        } else if (response.status === 403) {
          this.item = {'error': 'API Request Failed, check Settings'}
          this.error = this.lastSearchWasError = true
        }
      })
    }
  }
}
</script>
