<template>
<div>
  <input @keyup="keyup" @keydown.enter="enter" @input="onInput" :size="size" :value="value" class="einput" :placeholder="placeholder"></input>
</div>

</template>

<script>
export default {
  name: 'einput',
  props: ['placeholder', 'value', 'size'],
  methods: {
    keyup () {
      this.$emit('keyup')
    },
    enter () {
      this.$emit('enter')
    },
    onInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}

</script>

<style scoped>
.einput {
  font-family: Lato;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: 1px solid #000000;
  margin-top: 5px;
  width: auto;
  text-align: center !important;
  outline: none;
}

.einput:focus {
  -moz-box-shadow: 0 0 8px #000000;
  -webkit-box-shadow: 0 0 8px #000000;
  box-shadow: 0 0 8px #000000;
  border: 1px solid #ff724d;
}

</style>
