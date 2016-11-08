<style scoped>
  #error {
    color: #e04b4b;
  }
</style>

<template>
  <container>
    <div>
      <h1>Auction House Data Status:</h1>
      <router-link to="/home"><eButtonDanger title="Home"></eButtonDanger></router-link>
      <eInput @enter="getAuctionData(realmName)" v-model="realmName" placeholder="Realm"></eInput>
      <eButtonPrimary title="Search" id="search" @clicked="getAuctionData(realmName)"></eButtonPrimary>
      <transition name="slide-fade">
        <div v-if="show">
          <auctions auctions="auctionData"></auctions>
        </div>
      </transition>
    </div>
  </container>
</template>

<script>
import Container from '../Container/Container'
import Auctions from './Auctions'
import EButtonDanger from '../EButton/EButtonDanger'
import EButtonPrimary from '../EButton/EButtonPrimary'
import EInput from '../EInput/EInput'

export default {
  components: {
    Container,
    EButtonDanger,
    EButtonPrimary,
    EInput,
    Auctions
  },
  name: 'achievementlookup',
  data () {
    return {
      auctionDataCache: [],
      realmName: '',
      auctionData: {},
      show: false,
      error: false,
      lastSearchWasError: false
    }
  },
  ready () {
    this.$on('updateValue', function (realmName) {
      this.realmName = realmName
    })
  },
  methods: {
    getAuctionData (realmName) {
      console.log(realmName)
      let x = this.$store.getters.apiData.https + this.$store.getters.apiData.region + this.$store.getters.apiData.domain
      this.$store.dispatch('modifyAPI', ['AUCTION_DATA_STATUS', realmName])
      x += this.$store.getters.apiData.request
      x += '/' + this.$store.getters.apiData.requestArgs[0]
      x += '?locale=' + this.$store.getters.apiData.locale
      x += '&apikey=' + this.$store.getters.apiData.apikey
      console.log(x)
      this.$http.get(x).then((response) => {
        console.log('yay')
      }, (response) => {
        if (response.status === 404) {
          this.auctionData = {'error': 'Invalid Realm Name: ' + realmName, 'realmName': realmName}
          this.auctionDataCache.push(this.auctionData)
          this.error = this.lastSearchWasError = true
        } else if (response.status === 403) {
          this.auctionData = {'error': 'API Request Failed, check Settings'}
          this.error = this.lastSearchWasError = true
        }
      })
    }
  }
}
</script>
