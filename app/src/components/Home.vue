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
#error {
  color: #e04b4b;
}
</style>
<template>
  <div class="homepage">
    <container>
      <div>
        <h1>WoW Crypt</h1>
        <router-link to="/settings"><eButtonPrimary id="settings" title="Settings" ></eButtonPrimary></router-link>
      </div>
    </container>
    <container v-if="apiKeyIsSet()">
      <div class="">
        <container>
          <div>
            <router-link to="/achievement"><eButtonPrimary id="achievement" title="Achievement Lookup" ></eButtonPrimary></router-link>
          </div>
        </container>
        <container>
          <div>
            <router-link to="/auction-house"><eButtonPrimary id="auction-house" title="Auction House" disabled=true></eButtonPrimary></router-link>
          </div>
        </container>
        <container>
          <div>
            <router-link to="/boss"><eButtonPrimary id="boss" title="Boss Lookup" ></eButtonPrimary></router-link>
          </div>
        </container>
        <container>
          <div>
            <router-link to="/character"><eButtonPrimary id="character" title="Character Lookup"></eButtonPrimary></router-link>
          </div>
        </container>
        <container>
          <div>
            <router-link to="/item"><eButtonPrimary id="item" title="Item Lookup" ></eButtonPrimary></router-link>
          </div>
        </container>
        <container>
          <div>
            <router-link to="/recipe"><eButtonPrimary id="recipe" title="Recipe Lookup" ></eButtonPrimary></router-link>
          </div>
        </container>
      </div>
    </container>
  </div>
</template>

<script>
  import EButtonPrimary from './EButton/EButtonPrimary'
  import Container from './Container/Container'

  export default {
    components: {
      EButtonPrimary,
      Container
    },
    name: 'home',
    methods: {
      apiKeyIsSet () {
        return this.$store.getters.apiData.apikey !== ''
      }
    }
  }
</script>
