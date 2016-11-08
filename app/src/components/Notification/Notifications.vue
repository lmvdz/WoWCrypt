<template>
  <div class="notifications">
    <div v-for="notificationData in notifications">
        <notification :notification="notificationData"></notification>
    </div>
  </div>
</template>

<script>
import Notification from './Notification'

export default {
  components: {
    Notification
  },
  data () {
    return {
      notifications: this.$store.getters.notifications
    }
  }
}
</script>

<style>
</style>
