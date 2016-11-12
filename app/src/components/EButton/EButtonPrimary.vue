<template>
  <div>
    <button :disabled="disabled" @click="clicked" class="ebutton-primary">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'ebutton-primary',
  props: ['title', 'disabled'],
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
  .ebutton-primary {
    font-family: Lato;
    font-weight: 900;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    background: #3498db;
    background-image: -webkit-linear-gradient(top, #5b9395, #2cb875);
    background-image: -moz-linear-gradient(top, #5b9395, #2cb875);
    background-image: -ms-linear-gradient(top, #5b9395, #2cb875);
    background-image: -o-linear-gradient(top, #5b9395, #2cb875);
    background-image: linear-gradient(to bottom, #5b9395, #2cb875);
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 2px;
    text-shadow: 1px 1px 2px #000000;
    color: #ffffff;
    font-size: 16px;
    padding: 10px 20px 10px 20px;
    border: solid #000000 1px;
    text-decoration: none;
  }
  .ebutton-primary:hover {
    background: #2cb3b8;
    border: solid #00ff66 1px;
    background-image: -webkit-linear-gradient(top, #2cb875, #5b9395);
    background-image: -moz-linear-gradient(top, #2cb875, #5b9395);
    background-image: -ms-linear-gradient(top, #2cb875, #5b9395);
    background-image: -o-linear-gradient(top, #2cb875, #5b9395);
    background-image: linear-gradient(to bottom, #2cb875, #5b9395);
    -webkit-box-shadow: 0px 1px 3px #666666;
    -moz-box-shadow: 0px 1px 3px #666666;
    box-shadow: 0px 1px 3px #666666;
    text-decoration: none;
  }
  .ebutton-primary:disabled {
    background: #212222;
    color: #ff0000;
    border: solid #ff0000 1px;
  } 
  .ebutton-primary:hover:disabled {
    cursor: default;
    border: solid #ff0000 1px;
    background: #000000;
    -webkit-box-shadow: 0px 1px 3px #000000;
    -moz-box-shadow: 0px 1px 3px #000000;
    box-shadow: 0px 1px 3px #000000;
  }
</style>
