<style>
  @import url('https://fonts.googleapis.com/css?family=Lato:300');
  @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative');
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background: -moz-radial-gradient(center, ellipse cover, #292929 0%, #040404 100%); /* ff3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #292929), color-stop(100%, #040404)); /* safari4+,chrome */
    background: -webkit-radial-gradient(center, ellipse cover, #292929 0%, #040404 100%); /* safari5.1+,chrome10+ */
    background: -o-radial-gradient(center, ellipse cover, #292929 0%, #040404 100%); /* opera 11.10+ */
    background: -ms-radial-gradient(center, ellipse cover, #292929 0%, #040404 100%); /* ie10+ */
    background: radial-gradient(ellipse at center, #292929 0%, #040404 100%); /* w3c */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#292929', endColorstr='#808080',GradientType=1 ); /* ie6-9 */
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s ease;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    opacity: 0;
  }
  .notifications {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 250px;
  }
</style>

<template>
  <div>
    <notifications class="notifications"></notifications>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  import Notifications from 'src/components/Notification/Notifications'

  export default {
    store,
    components: {
      Notifications
    },
    created () {
      this.$store.dispatch('setup')
    }
  }
</script>
