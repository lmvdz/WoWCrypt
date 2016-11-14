<template lang="html">
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'container'
}
</script>

<style scoped lang="css">
  .container{
    /** background (fill with color) */
    color: #dddddd;
    background: #181818;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 5px 5px 5px;

    /** border radius */
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0px;

    /** border */
    border: solid #df3d3d 1px;

    /** text decoration */
    text-decoration: none;
  }
  .container:hover{
    /** box shadow */
    -webkit-box-shadow: 0px 1px 3px #000000, inset 2px 2px 3px #000000, inset -2px -2px 3px #000000;
    -moz-box-shadow: 0px 1px 3px #000000, inset 2px 2px 3px #000000, inset -2px -2px 3px #000000;
    box-shadow: 0px 1px 3px #000000, inset 2px 2px 3px #000000, inset -2px -2px 3px #000000;
  }
</style>
