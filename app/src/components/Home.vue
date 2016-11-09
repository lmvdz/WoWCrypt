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
#links-list {
  width: 300px !important;
  height: 275px !important;
  overflow: hidden !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
}
#links-list-item {
  display: inline !important;
  list-style-type: none !important;
  float: left !important;
  padding-left: 10px !important;
  margin-left: 0 !important;
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
      <ul id="links-list">
        <li v-for="link in links" id="links-list-item">
          <router-link :to="'/' + link.id"><eButtonPrimary :title="link.title" :disabled="link.disabled"></eButtonPrimary></router-link>
        </li>
      </ul>
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
    data () {
      return {
        links: this.$store.getters.routes
      }
    },
    methods: {
      apiKeyIsSet () {
        return this.$store.getters.api.apikey !== ''
      }
    }
  }
</script>
