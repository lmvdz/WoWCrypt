<template lang="html">
  <container>
    <div>
      <h1>{{title}}</h1>
      <router-link class="link danger" to="/home">Home</router-link>
      <slot></slot>
    </div>
  </container>
</template>

<script>
import Container from '../Container/Container'

export default {
  name: 'lookup',
  props: ['title'],
  components: {
    Container
  }
}
</script>

<style lang="css">
</style>
