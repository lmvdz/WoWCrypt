<template>
  <div class="masterlist">
    <ul>
      <div v-for="bosss in bosslist">
        <li><boss :bossData="bosss.bossData"></boss></li>
      </div>
    </ul>
  </div>
</template>

<script>
import Boss from './Boss'

export default {
  components: {
    Boss
  },
  name: 'bossmasterlist',
  data () {
    return {
      bosslist: []
    }
  },
  methods: {
    getBossList () {

    }
  }
}
</script>

<style scoped>
</style>
