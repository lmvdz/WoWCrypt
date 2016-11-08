<template lang="html">
  <div class="container">
    <h1>{{title}}</h1>
    <router-link to="/home"><eButtonDanger title="Home"></eButtonDanger></router-link>
    <slot></slot>
  </div>
</template>

<script>
import EButtonDanger from '../EButton/EButtonDanger'

export default {
  name: 'lookup',
  props: ['title'],
  components: {
    EButtonDanger
  }
}
</script>

<style lang="css">
</style>
