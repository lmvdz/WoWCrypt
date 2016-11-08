<template>
  <div>
    <button :disabled="disabled" @click="clicked" class="ebutton-danger">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'ebutton-danger',
  props: ['title', 'disabled'],
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
  .ebutton-danger {
    font-family: Lato;
    font-weight: 900;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    background: #d93434;
    background-image: -webkit-linear-gradient(top, #d93434, #b82c2c);
    background-image: -moz-linear-gradient(top, #d93434, #b82c2c);
    background-image: -ms-linear-gradient(top, #d93434, #b82c2c);
    background-image: -o-linear-gradient(top, #d93434, #b82c2c);
    background-image: linear-gradient(to bottom, #d93434, #b82c2c);
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 2px;
    text-shadow: 1px 1px 2px #000000;
    color: #ffffff;
    font-size: 16px;
    padding: 10px 20px 10px 20px;
    border: solid #ff0000 1px;
    text-decoration: none;
  }
  .ebutton-danger:hover {
    background: #b82c2c;
    border: solid #ff0000 1px;
    background-image: -webkit-linear-gradient(top, #b82c2c, #d93434);
    background-image: -moz-linear-gradient(top, #b82c2c, #d93434);
    background-image: -ms-linear-gradient(top, #b82c2c, #d93434);
    background-image: -o-linear-gradient(top, #b82c2c, #d93434);
    background-image: linear-gradient(to bottom, #b82c2c, #d93434);
    -webkit-box-shadow: 0px 1px 3px #666666;
    -moz-box-shadow: 0px 1px 3px #666666;
    box-shadow: 0px 1px 3px #666666;
    text-decoration: none;
  }
  .ebutton-danger:disabled {
    background: #212222;
    color: #ff0000;
    border: solid #ff0000 1px;
    text-shadow: 3px 3px 2px #000000;
  }
  .ebutton-danger:hover:disabled {
    text-decoration: line-through;
    border: solid #ff0000 1px;
    background: #000000;
    -webkit-box-shadow: 0px 1px 3px #000000;
    -moz-box-shadow: 0px 1px 3px #000000;
    box-shadow: 0px 1px 3px #000000;
  }
</style>
