<style scoped>
  #itemName {
    color: #ffffff;
  }
  #itemDescription {
    color: #d4d4d4;
  }
  .item {
    /** background (fill with color) */
    background: #181818;
    margin-top: 10px;
    padding: 10px 10px 10px 10px;
    /** border radius */
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0px;
    /** box shadow */
    -webkit-box-shadow: 0px 1px 3px #666666;
    -moz-box-shadow: 0px 1px 3px #666666;
    box-shadow: 0px 1px 3px #666666;
    /** border */
    border: solid #bebaba 1px;
    /** text decoration */
    text-decoration: none;
  }
</style>

<template>
  <a @click="preventRepage" v-if="itemData !== undefined" style="text-decoration: none;" :href="itemData.WoWHeadLink" target="_blank">
  <div class="item">
      <span :style="{color: itemData.qualityColor}" id="itemName">{{itemData.name}}</span>
    <!--<span v-if="itemData.description !== undefined" id="itemDescription"><br>{{itemData.description}}</span> -->
  </div>
  </a>
</template>

<script>
export default {
  name: 'wowitem',
  props: ['itemData'],
  methods: {
    preventRepage (event) {
      event.preventDefault()
    }
  }
}
</script>
