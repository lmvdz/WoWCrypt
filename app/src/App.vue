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
  ul{
    overflow: hidden;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
  li{
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
    <vue-progress-bar :show="true" :init="false" reference="loading" ></vue-progress-bar>
    <vue-progress-bar :show="true" :init="false" reference="loading1" ></vue-progress-bar>
    <vue-progress-bar :show="false" :init="false" reference="loading2" ></vue-progress-bar>
    <vue-progress-bar :show="false" :init="false" reference="loading3" ></vue-progress-bar>
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
    computed: {
      loading () {
        return [
          this.$pb.get('loading'),
          this.$pb.get('loading1'),
          this.$pb.get('loading2'),
          this.$pb.get('loading3')
        ]
      }
    },
    mounted () {
      this.loading[0].progress.finish()
    },
    created () {
      this.loading = [
        this.$pb.create('loading'),
        this.$pb.create('loading1'),
        this.$pb.create('loading2'),
        this.$pb.create('loading3')
      ]
      this.$store.dispatch('setup')
      this.loading[0].progress.start()
      this.$router.beforeEach((to, from, next) => {
        if (this.loading[0].progress.quickHide()) {
          this.loading[1].progress.quickHide()
          // this.loading[2].progress.quickHide()
          // this.loading[3].progress.quickHide()
        } else if (this.loading[1].progress.quickHide()) {
          this.loading[0].progress.quickHide()
          // this.loading[2].progress.quickHide()
          // this.loading[3].progress.quickHide()
        } else if (this.loading[2].progress.quickHide()) {
          this.loading[1].progress.quickHide()
          // this.loading[0].progress.quickHide()
          // this.loading[3].progress.quickHide()
        } else if (this.loading[3].progress.quickHide()) {
          this.loading[1].progress.quickHide()
          // this.loading[2].progress.quickHide()
          // this.loading[0].progress.quickHide()
        }
        let this2 = this
        setTimeout(() => {
          this2.startReroute(to, from, next)
        }, 100)
      })
      this.$router.afterEach((to, from) => {
        this.loading[0].progress.finish()
        this.loading[1].progress.finish()
        // this.loading[2].progress.finish()
        // this.loading[3].progress.finish()
      })
    },
    methods: {
      startReroute (to, from, next) {
        //  uncomment to use vue-router meta style
        //  to.meta.progress !== undefined ? this.$Progress.parseMeta(to.meta.progress) : null
        //  randomizes the style of the progress bar based on parameters
        this.loading[0].progress.randomize({
          trail: {min: -1, max: -1},
          thickness: {min: 20, max: 20},
          location: ['left'],
          inverse: [false]
        })
        this.loading[1].progress.randomize({
          trail: {min: 100, max: 300},
          thickness: {min: 20, max: 20},
          location: ['right'],
          inverse: [false]
        })
        // this.loading[2].progress.randomize({
        //   trail: {min: -1, max: -1},
        //   thickness: {min: 20, max: 20},
        //   location: ['right'],
        //   inverse: [false]
        // })
        // this.loading[3].progress.randomize({
        //   trail: {min: -1, max: -1},
        //   thickness: {min: 20, max: 20},
        //   location: ['bottom'],
        //   inverse: [false]
        // })
        this.loading[0].progress.start()
        this.loading[1].progress.start()
        // this.loading[2].progress.start()
        // this.loading[3].progress.start()
        next()
      }
    }
  }
</script>
