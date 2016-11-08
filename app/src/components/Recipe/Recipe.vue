<template>
  <div class="container">
    <a class="recipeLink" @click="preventRepage" :href="recipe.link">
      <h3>
        <span>{{recipe.name}}</span>
        <span v-if="recipe.profession !== undefined"> - <span :style="{color: getProfessionColor()}">{{recipe.profession}}</span></span>
      </h3>
    </a>
  </div>
</template>

<script>
export default {
  name: 'recipe',
  props: ['recipe'],
  methods: {
    preventRepage (event) {
      event.preventDefault()
    },
    getProfessionColor () {
      switch (this.recipe.profession) {
        case 'Enchanting':
          return '#c864e6'
        case 'Cooking':
          return '#e6c964'
        default:
          return '#ffffff'
      }
    }
  }
}
</script>

<style>
.recipeLink {
  color: #dddddd;
  /** text decoration */
  text-decoration: none;
}
</style>
