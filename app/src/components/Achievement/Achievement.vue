<style>
.achievementRewardItem {
  /** background (fill with color) */
  color: #dddddd;
  /** text decoration */
  text-decoration: none;
}
#achievementTitle{
  text-align: left;
  color: #d29d13;
}
#achievementDescription{
  text-align: left;
  color: #1cc775;
}
#achievementReward{
  text-align: left;
  color: #0e94ac;
}
</style>

<template>
<div>
  <a @click="preventRepage" v-if="achievementData !== undefined" style="text-decoration: none;" :href="achievementData.WoWHeadLink" target="_blank">
    <div class="container">
      <h3>
        <span v-if="achievementData.title !== undefined" id="achievementTitle">Title: </span>{{achievementData.title}}
        <br/>
        <span v-if="achievementData.description !== undefined" id="achievementDescription">Desription: </span>{{achievementData.description}}
        <br/>
        <span v-if="achievementData.reward !== undefined" id="achievementReward">Reward: </span>{{achievementData.reward}}
        <div v-if="achievementData.rewardItems !== undefined" v-for="reward in achievementData.rewards">
          <div class="container">
            <a class="achievementRewardItem" @click="preventRepage" :href="reward.link">
              <span :style="{color: getColor(reward.quality)}"><small>{{reward.name}}<small></span>
            </a>
          </div>
        </div>
      </h3>
    </div>
  </a>
</div>
</template>

<script>
export default {
  name: 'achievement',
  props: ['achievementData'],
  methods: {
    preventRepage (event) {
      event.preventDefault()
    },
    getColor (quality) {
      switch (quality) {
        case '0':
          return '#333333'
        case 1:
          return '#ededed'
        case 2:
          return '#0ce800'
        case 3:
          return '#0075ff'
        case 4:
          return '#8700ff'
        case 5:
          return '#f99500'
        case 6:
          return '#ffbf00'
        case 7:
          return '#ffe600'
        default:
          return ''
      }
    }
  }
}
</script>
