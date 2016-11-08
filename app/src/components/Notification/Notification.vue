<template>
  <div :style="{'border-color': getBorderColor(notification.type), 'background-color': getBackgroundColor(notification.type)}" class="notification">
    <button @click="close" type="button" name="button">x</button>
    <h5 v-if="notification.title">{{notification.title}}</h5>
    <p v-if="notification.text">{{notification.text}}</p>
  </div>
</template>

<script>
export default {
  props: ['notification'],
  data () {
    return {
      timer: null
    }
  },
  created () {
    let timeout = this.notification.timeout !== undefined ? this.notification.timeout : true
    if (timeout) {
      let delay = this.notification.delay || 3000
      this.timer = setTimeout(() => {
        this.close()
      }, delay)
    }
  },
  methods: {
    close () {
      clearTimeout(this.timer)
      this.$store.dispatch('removeNotification', this.notification)
    },
    getBorderColor (nType) {
      if (nType !== undefined) {
        switch (nType) {
          case 'success':
            return '#a1ff44'
          case 'warning':
            return '#f9bb1d'
          case 'danger':
            return '#ff3737'
          default:
            return '#79438c'
        }
      } else {
        return '#79438c'
      }
    },
    getBackgroundColor (nType) {
      if (nType !== undefined) {
        switch (nType) {
          case 'success':
            return '#78c72a'
          case 'warning':
            return '#be901a'
          case 'danger':
            return '#bd1919'
          default:
            return '#403345'
        }
      } else {
        return '#403345'
      }
    }
  }
}
</script>

<style>
.notification {
  border: solid #bebaba 1px;
  margin-bottom: 10px;
}
</style>
