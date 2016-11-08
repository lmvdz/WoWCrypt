<template lang="html">
  <container>
    <div>
      <h1>{{title}}</h1>
      <router-link to="/home"><eButtonDanger title="Home"></eButtonDanger></router-link>
      <slot></slot>
    </div>
  </container>
</template>

<script>
import Container from '../Container/Container'
import EButtonDanger from '../EButton/EButtonDanger'

export default {
  name: 'lookup',
  props: ['title'],
  components: {
    EButtonDanger,
    Container
  }
}
</script>

<style lang="css">
</style>
