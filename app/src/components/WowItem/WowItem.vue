<style scoped>
</style>

<template>
  <a @click="preventRepage" v-if="itemData !== undefined" style="text-decoration: none;" :href="itemData.WoWHeadLink" target="_blank">
  <container>
    <div>
      <span :style="{color: itemData.qualityColor}" id="itemName">{{itemData.name}}</span>
 <!-- <span v-if="itemData.description !== undefined" id="itemDescription"><br>{{itemData.description}}</span> -->
    </div>
  </container>
  </a>
</template>

<script>
import Container from '../Container/Container'
export default {
  components: {
    Container
  },
  name: 'wowitem',
  props: ['itemData'],
  methods: {
    preventRepage (event) {
      event.preventDefault()
    }
  }
}
</script>
