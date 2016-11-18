<template>
<div>
  <button :disabled="disabled" @click="clicked" class="ebutton">{{title}}</button>
</div>

</template>

<script>
export default {
  name: 'ebutton',
  props: ['title', 'disabled'],
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}

</script>

<style scoped>
.ebutton {
  font-family: Lato;
  font-weight: 900;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  background: #d9d9d9;
  background-image: -webkit-linear-gradient(top, #d9d9d9, #b8b8b8);
  background-image: -moz-linear-gradient(top, #d9d9d9, #b8b8b8);
  background-image: -ms-linear-gradient(top, #d9d9d9, #b8b8b8);
  background-image: -o-linear-gradient(top, #d9d9d9, #b8b8b8);
  background-image: linear-gradient(to bottom, #d9d9d9, #b8b8b8);
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0px;
  text-shadow: 2px 2px 4px #666666;
  -webkit-box-shadow: 0px 1px 3px #666666;
  -moz-box-shadow: 0px 1px 3px #666666;
  box-shadow: 0px 1px 3px #666666;
  color: #ededed;
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  border: solid #8a8a8a 1px;
  text-decoration: none;
}

.ebutton:hover {
  background: #b8b8b8;
  background-image: -webkit-linear-gradient(top, #b8b8b8, #d9d9d9);
  background-image: -moz-linear-gradient(top, #b8b8b8, #d9d9d9);
  background-image: -ms-linear-gradient(top, #b8b8b8, #d9d9d9);
  background-image: -o-linear-gradient(top, #b8b8b8, #d9d9d9);
  background-image: linear-gradient(to bottom, #b8b8b8, #d9d9d9);
  text-decoration: none;
}

</style>
