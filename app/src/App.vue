<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300');
@import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative');
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  align-items: center;
  background: -moz-radial-gradient(center, ellipse cover, #292929 0%, #040404 100%);
  /* ff3.6+ */
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #292929), color-stop(100%, #040404));
  /* safari4+,chrome */
  background: -webkit-radial-gradient(center, ellipse cover, #292929 0%, #040404 100%);
  /* safari5.1+,chrome10+ */
  background: -o-radial-gradient(center, ellipse cover, #292929 0%, #040404 100%);
  /* opera 11.10+ */
  background: -ms-radial-gradient(center, ellipse cover, #292929 0%, #040404 100%);
  /* ie10+ */
  background: radial-gradient(ellipse at center, #292929 0%, #040404 100%);
  /* w3c */
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#292929', endColorstr='#808080', GradientType=1);
  /* ie6-9 */
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

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.notifications {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 250px;
}

ul {
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

li {
  list-style-position: inside;
  display: inline-block;
  list-style-type: none;
}

</style>

<template>
<div>
  <notifications class="notifications"></notifications>
  <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <vue-progress-bar :show="true" reference="router"></vue-progress-bar>
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
    this.$pb.start('router')
    let this2 = this
    setTimeout(() => {
      this2.$pb.finish('router')
    }, 400) // 400 is a good number, anything less and the bars will not work nicely.
  },
  created () {
    this.$store.dispatch('setup')
    this.$router.beforeEach((to, from, next) => {
      this.$pb.start('router', to.meta.progress, 'meta')
      // let random = {
      //   color: { r: {min: 0, max: 255}, g: {min: 0, max: 255}, b: {min: 0, max: 255} }, // rgb([0-255], [0-255], [0-255])
      //   fail: { r: {min: 250, max: 255}, g: {min: 0, max: 0}, b: {min: 100, max: 150} }, // rgb([0-255], [0-255], [0-255])
      //   thickness: { min: 10, max: 20, suffix: 'px' }, // [2-7]px
      //   trail: { min: 20, max: 50, suffix: 'px' },
      //   transition: {
      //     time: { min: 0.5, max: 1.75 },
      //     opacity: { min: 0.7, max: 1.4 }
      //   },
      //   location: ['top', 'bottom', 'left'], // ['top', 'left', 'right', 'bottom']
      //   inverse: [true, false], // [true, false]
      //   bounce: [true, false], // [true, false]
      //   gradient: { // {use: true, gradient: 'predefined'}
      //     use: [true, false],
      //     gradient: {
      //       from: { r: {min: 0, max: 255}, g: {min: 0, max: 255}, b: {min: 0, max: 255} },
      //       to: { r: {min: 0, max: 255}, g: {min: 0, max: 255}, b: {min: 0, max: 255} }
      //     }
      //   }
      // }
      // this.$pb.start('router', random, 'randomize')
      // this.$pb.start('router', {trail: {min: -1, max: -1}}, 'randomize')
      // this.$pb.modify('router', {call: 'inverse', modifier: 'set', argument: true})
      // this.$pb.start('router')
      next()
    })
    this.$router.afterEach((to, from) => {
      let this2 = this
      setTimeout(() => {
        this2.$pb.finish('router')
      }, 400) // 400 is a good number, anything less and the bars will not work nicely.
    })
  }
}

</script>
