<template>
<div class="homepage">
  <container style="width: 30vw">
    <div>
      <h1>WoW Crypt</h1>
      <router-link class="link" to="/settings">Settings</router-link>
    </div>
  </container>
  <container style="width: 30vw" v-if="apiKeyIsSet()">
    <div class="table home">
      <table id="links-list">
        <tr>
          <td v-for="link in links" id="links-list-item">
            <router-link class="link" :to="'/' + link.id">{{link.title}}</router-link>
          </td>
        </tr>
      </table>
    </div>
  </container>
</div>

</template>

<script>
import Container from './Container/Container'
export default {
  components: {
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
<style>
h1 {
  font-family: Cinzel Decorative, Arial, sans-serif;
}

h2 {
  font-family: Lato;
}

h3 {
  font-family: Lato;
}

#error {
  color: #e04b4b;
}

.table {
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: scroll;
}

.home {
  height: 41vh;
  width: 30.3vw;
}

#links-list {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

#links-list-item {
  width: 100%;
  display: block;
}

.link {
  font-family: Lato;
  font-weight: 600;
  color: #e6e6e6;
  display: inline-block;
  background: rgba(17, 17, 17, 0.49);
  margin: 5px 0 5px 0 !important;
  width: 90%;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  font-size: 18px;
  border: solid #000000 1px;
  text-decoration: none;
  cursor: pointer;
  padding: 2px;
  user-select: none;
}

.danger {
  background: rgba(147, 0, 0, 0.49) !important;
}

.danger:hover {
  background: rgba(192, 45, 45, 0.72) !important;
  border: solid #131313 1px !important;
}

.danger:active {
  border: solid rgb(145, 73, 73) 1px !important;
}

.primary {
  background: rgba(29, 147, 0, 0.49) !important;
}

.primary:hover {
  background: rgba(74, 192, 45, 0.72) !important;
  border: solid #131313 1px !important;
}

.primary:active {
  border: solid rgb(119, 195, 109) 1px !important;
}

.link:hover {
  background: rgba(62, 62, 62, 0.72);
  border: solid #888888 1px;
  text-decoration: none;
  /** box shadow */
  -webkit-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
}

.link:active {
  border: solid #4e4e4e 1px;
}
@media screen and (-webkit-min-device-pixel-ratio:0) {
  .table {
      background-color: rgba(0,0,0,0);
      -webkit-background-clip: text;
      background-clip: text;
      /* uncomment following line to see the trick in actions */
      /* -webkit-text-fill-color: transparent; */
      transition: background-color 1s;
      -webkit-transition: background-color 1s;
  }
  .table:hover {
     background-color: rgba(255, 78, 78, 1);
  }
  .table::-webkit-scrollbar {
    width: 2px;
    height: 0px;
  }
  .table::-webkit-scrollbar-track {
    display: none;
    border: 0px solid #ff4e4e;
    border-radius: 0px;
  }
  .table::-webkit-scrollbar-track:hover {
    background-color: #666666;
  }
  .table::-webkit-scrollbar-track:active {
    background-color: #333333;
  }
  .table::-webkit-scrollbar-thumb {
    border: 0px none #ffffff;
    border-radius: 0px;
    background-color: inherit;
  }
  .table::-webkit-scrollbar-thumb:hover {
    background-color: #fb2929;
  }
  .table::-webkit-scrollbar-thumb:active {
    background-color: #fe7e7e;
  }
  .table::-webkit-scrollbar-button {
    height: 19px;
    opacity: 0;
  }
  .table::-webkit-scrollbar-corner {
    background-color: transparent;
  }
}
</style>
