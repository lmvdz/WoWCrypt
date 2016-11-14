<style scoped>
  #error {
    color: #e04b4b;
  }
</style>

<template>
  <lookup title="Auction House Data Status">
    <div>
      <h3>Realm Name</h3>
      <eInput @enter="getAuctionData(realmName)" v-model="realmName" placeholder="Realm"></eInput>
      <a class="link primary" @click="getAuctionData(realmName)">Search</a>
      <transition name="slide-fade">
        <div v-if="show">
          <auctions auctions="auctionData"></auctions>
        </div>
      </transition>
    </div>
  </lookup>
</template>

<script>
import Lookup from '../../Lookup/Lookup'
import EInput from '../../EInput/EInput'
import Container from '../../Container/Container'
import Auctions from './Auctions'

export default {
  components: {
    Container,
    Lookup,
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
      let x = this.$store.getters.api.https + this.$store.getters.api.region + this.$store.getters.api.domain
      this.$store.dispatch('modifyAPI', ['AUCTION_DATA_STATUS', realmName])
      x += this.$store.getters.api.request
      x += '/' + this.$store.getters.api.requestArgs[0]
      x += '?locale=' + this.$store.getters.api.locale
      x += '&apikey=' + this.$store.getters.api.apikey
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
