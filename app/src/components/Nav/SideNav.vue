<template lang="html">
  <container style=":style" class="sidenav">

  </container>
</template>

<script>
import Container from '../Container/Container'
export default {
  props: ['location']
  components: {
    Container
  },
  name: 'sidenav'
}
</script>

<style scoped>
  .sidenav {
    position: fixed;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
