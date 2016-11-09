<template>
  <lookup title="Recipe Lookup">
    <div>
      <container>
        <div>
          <h3>Recipe ID</h3>
          <eInput @enter="getRecipe(recipeId)" @keyup="checkForChange" v-model="recipeId" placeholder="Recipe ID"></eInput>
        </div>
      </container>
      <eButtonPrimary title="Search" id="search" @clicked="getRecipe(recipeId)"></eButtonPrimary>
      <h2 v-if="inputHasCharacter" id="error">please enter a numeric only value</h2>
      <h3 v-if="error" id="error">{{recipe.error}}</h3>
      <recipe v-if="show" :recipe="recipe"><recipe>
    </div>
  </lookup>
</template>

<script>
import Lookup from '../../Lookup/Lookup'
import Container from '../../Container/Container'
import EInput from '../../EInput/EInput'
import EButtonPrimary from '../../EButton/EButtonPrimary'
import Recipe from './Recipe'

export default {
  name: 'recipelookup',
  components: {
    Recipe,
    Container,
    Lookup,
    EInput,
    EButtonPrimary
  },
  data () {
    return {
      recipeId: '',
      recipeDb: [],
      recipe: {},
      show: false,
      error: false,
      inputHasCharacter: false
    }
  },
  created () {
    let x = this.$store.getters.db.recipes
    x = x.slice()
    this.recipeDb = x
  },
  methods: {
    isIdAlreadyInDb (db, dataId) {
      let inDb = false
      for (var x in db) {
        if (db[x].id === dataId) {
          inDb = true
        }
      }
      return inDb
    },
    isAlreadyInDb (db, data) {
      let inDb = false
      for (var x in db) {
        if (db[x].id === data.id) {
          inDb = true
        }
      }
      return inDb
    },
    getFromDb (db, dataId) {
      for (var x in db) {
        if (db[x].id === dataId) {
          return db[x]
        }
      }
      return null
    },
    tryToPushToDatabase (db, recipe) {
      if (!this.isAlreadyInDb(db, recipe)) {
        db.push(recipe)
        let x = db.slice()
        this.$store.dispatch('saveDatabase', ['RECIPE', x])
        return true
      }
      return false
    },
    purify (recipe) {
      //  get the recipe's other data
      //  add other functions from a constant function file
      recipe.link = 'http://www.wowhead.com/spell=' + recipe.id
      if (this.tryToPushToDatabase(this.recipeDb, recipe)) {
        console.log('pushed recipe with id: ' + recipe.id + ' to the database')
      }
    },
    checkForChange () {
      //  is recipeId Not A Number (NaN)
      if (isNaN(this.recipeId)) {
        this.inputHasCharacter = true
        return
      } else {
        this.inputHasCharacter = false
      }
      //  was the last searched recipe the current recipeId
      if ('' + this.recipe.id === this.recipeId) {
        if (this.recipe.error === undefined) {
          this.error = false
          this.show = true
        } else if (this.recipe.error !== undefined) {
          this.error = true
          this.show = false
        }
        return
      } else {
        this.error = false
        this.show = false
      }
      //  is the current recipeId already stored in the Db
      if (this.isIdAlreadyInDb(this.recipeDb, this.recipeId)) {
        this.recipe = this.getFromDb(this.recipeDb, this.recipeId)
        this.error = false
        this.show = true
      }
    },
    getRecipe () {
      let y = this.$store.getters.api
      let x = y.https + y.region + y.domain
      this.$store.dispatch('modifyAPI', ['RECIPE', this.recipeId])
      x += y.request
      x += '/' + y.requestArgs[0]
      x += '?locale=' + y.locale
      x += '&apikey=' + y.apikey
      this.$http.get(x).then((response) => {
        this.recipe = response.data
        this.show = true
        this.error = false
        this.purify(this.recipe)
      }, (response) => {
        if (response.status === 404) {
          this.recipe = {'error': 'Invalid Recipe ID: ' + this.recipeId, 'id': this.recipeId}
          this.error = true
          this.show = false
          if (this.tryToPushToDatabase(this.recipeDb, this.recipe)) {
            console.log('pushed recipe with id: ' + this.recipe.id + ' to the database')
          }
        } else if (response.status === 403) {
          this.achievement = {'error': 'API Request Failed, check Settings'}
          this.error = true
          this.show = false
        }
      })
    }
  }
}
</script>

<style>
</style>
