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
    <vue-progress-bar></vue-progress-bar>
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
    mounted () {
      this.$Progress.finish()
    },
    created () {
      this.$Progress.start()
      this.$store.dispatch('setup')
      this.$router.beforeEach((to, from, next) => {
        if (this.$Progress.quickHide()) {
          let this2 = this
          setTimeout(() => {
            this2.startReroute(to, from, next)
          }, 100)
        } else {
          this.startReroute(to, from, next)
        }
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    },
    methods: {
      startReroute (to, from, next) {
        // uncomment to use vue-router meta style
        // to.meta.progress !== undefined ? this.$Progress.parseMeta(to.meta.progress) : null
        // randomizes the style of the progress bar based on parameters
        this.$Progress.randomize({
          color: {r: {min: 0, max: 255}, g: {min: 0, max: 255}, b: {min: 0, max: 255}},
          fail: {r: {min: 0, max: 255}, g: {min: 0, max: 255}, b: {min: 0, max: 255}},
          thickness: {min: 3, max: 7, suffix: 'px'},
          location: ['top', 'left'],
          inverse: [true, false],
          transition: {time: {min: 0.5, max: 1.75}, opacity: {min: 0.7, max: 1.4}}
        })
        this.$Progress.start()
        next()
      }
    }
  }
</script>
