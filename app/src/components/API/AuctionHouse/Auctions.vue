<template>
<div class="auctions">
  <ul>
    <div v-for="auction in auctions">
      <li id="auction">
        <span id="owner">{{auction.owner}}</span>
        <span id="realm">{{auction.ownerRealm}}</span>
        <span id="bid">{{auction.bid}}</span>
        <span id="buyout">{{auction.buyout}}</span>
        <span id="quantity">{{auction.quantity}}</span>
        <span id="timeLeft">{{auction.timeLeft}}</span>
        <wowItem :itemData="auction.item"></wowItem>
      </li>
    </div>
  </ul>

</div>
</template>

<script>
import WowItem from '../WowItem/WowItem'

export default {
  components: {
    WowItem
  },
  data () {
    return {
      auctions: []
    }
  },
  name: 'auctions'
}
</script>

<style scoped>
</style>
