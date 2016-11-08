<template>
  <container>
    <div>
      <h1>Settings</h1>
      <router-link to="/home"><eButtonDanger title="Home"></eButtonDanger></router-link>
      <container id="apikey">
        <div>
          <h2>Community API Key</h2>
          <eInput size="40" v-model="apiKey" :placeholder="apiPlaceholder"></eInput>
          <h3 v-if="errors.api.error" id="error">{{errors.api.reason}}</h3>
        </div>
      </container>
      <container id="region">
        <div>
          <h2>Region</h2>
          <select id="regionSelector" v-model="region">
            <option value="EU">EU</option>
            <option value="KR">KR</option>
            <option value="TW">TW</option>
            <option value="US">US</option>
          </select>
        </div>
      </container>
      <eButtonPrimary id="save" @clicked="saveSettings" title="Save"></eButtonPrimary>
    </div>
  </container>
</template>

<script>
import Container from '../Container/Container'
import EInput from '../EInput/EInput'
import EButtonDanger from '../EButton/EButtonDanger'
import EButtonPrimary from '../EButton/EButtonPrimary'

export default {
  components: {
    Container,
    EInput,
    EButtonDanger,
    EButtonPrimary
  },
  created () {
    this.loadSettings(this.$store.getters.settings)
  },
  data () {
    return {
      apiPlaceholder: '',
      apiKey: '',
      region: 'EU',
      errors: {
        'api': {'error': false, 'reason': ''},
        'region': {'error': false, 'reason': ''}
      }
    }
  },
  methods: {
    loadSettings (data) {
      this.apikey = this.apiPlaceholder = data.apikey
      this.region = data.region
      if (this.apiPlaceholder === '') {
        this.apiPlaceholder = 'zn2vjjju6qpav96daty'
      }
    },
    saveSettings () {
      //  save the settings to file
      this.$store.dispatch('saveSettings', {'apikey': this.apiKey, 'region': this.region})
      let notify = {
        'title': 'Success!',
        'text': 'API & Settings updated.',
        'type': 'success',
        'timeout': true,
        'delay': 3000
      }
      this.$store.dispatch('addNotification', notify)
      //  set the api key and region
      this.$store.dispatch('modifyAPI', ['SET_API_KEY', this.apiKey])
      this.$store.dispatch('modifyAPI', ['SET_API_REGION', this.region])
    }
  }
}
</script>

<style scoped>
#regionSelector {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border:1px solid #BEBEBE;
  width: auto;
  text-align: center !important;
  outline: none;
}
#regionSelector:focus{
  -moz-box-shadow: 0 0 8px #000000;
  -webkit-box-shadow: 0 0 8px #000000;
  box-shadow: 0 0 8px #000000;
  border: 1px solid #ff724d;
}
</style>
