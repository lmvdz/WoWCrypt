<style>
h1{
  font-family: Cinzel Decorative, Arial, sans-serif;
}
h2{
  font-family: Lato;
}
h3{
  font-family: Lato;
}
.container{
  /** background (fill with color) */
  color: #dddddd;
  background: #181818;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 5px 5px 5px;
  /** border radius */
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0px;
  /** box shadow */
  /** border */
  border: solid #13ff6a 1px;
  /** text decoration */
  text-decoration: none;
}
.container:hover{
  -webkit-box-shadow: 0px 1px 3px #000000, inset 2px 2px 3px #000000, inset -2px -2px 3px #000000;
  -moz-box-shadow: 0px 1px 3px #000000, inset 2px 2px 3px #000000, inset -2px -2px 3px #000000;
  box-shadow: 0px 1px 3px #000000, inset 2px 2px 3px #000000, inset -2px -2px 3px #000000;
}
</style>
<template>
  <div class="homepage">
    <div class="container">
      <h1>WoW Crypt</h1>
      <router-link to="/settings"><eButtonPrimary id="settings" title="Settings" ></eButtonPrimary></router-link>
    </div>
    <div v-if="apiKeyIsSet()" class="container">
      <div class="container">
        <router-link to="/achievement"><eButtonPrimary id="achievement" title="Achievement Lookup" ></eButtonPrimary></router-link>
      </div>
      <div class="container">
        <router-link to="/auction-house"><eButtonPrimary id="auction-house" title="Auction House" disabled=true></eButtonPrimary></router-link>
      </div>
      <div class="container">
        <router-link to="/boss"><eButtonPrimary id="boss" title="Boss Lookup" ></eButtonPrimary></router-link>
      </div>
      <div class="container">
        <router-link to="/character"><eButtonPrimary id="character" title="Character Lookup"></eButtonPrimary></router-link>
      </div>
      <div class="container">
        <router-link to="/item"><eButtonPrimary id="item" title="Item Lookup" ></eButtonPrimary></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import EButtonPrimary from './EButton/EButtonPrimary'

  export default {
    components: {
      EButtonPrimary
    },
    name: 'home',
    methods: {
      apiKeyIsSet () {
        return this.$store.getters.apiData.apikey !== ''
      }
    }
  }
</script>
