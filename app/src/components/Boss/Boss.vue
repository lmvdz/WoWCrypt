<template>
  <div>
    <a @click="preventRepage" v-if="bossData !== undefined" style="text-decoration: none;" :href="bossData.WoWHeadLink" target="_blank">
    <div class="container">
        <span id="bossName">{{bossData.name}}</span>
        <span v-if="bossData.zoneName !== undefined">- {{bossData.zoneName}}</span>
      <!--  <span v-if="bossData.description !== undefined" id="bossDescription"><br>{{bossData.description}}</span> -->
    </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['bossData'],
  name: 'boss',
  methods: {
    preventRepage (event) {
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
  #bossName {
    color: #ffffff;
  }
  #bossDescription {
    color: #d4d4d4;
  }
</style>
