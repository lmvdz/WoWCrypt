export default [
  {
    path: '/',
    name: 'home',
    component: require('components/Home')
  },
  {
    path: '/achievement',
    name: 'achievement',
    component: require('components/Achievement/AchievementLookup')
  },
  {
    path: '/auction-house',
    name: 'auction-house',
    component: require('components/AuctionHouse/AuctionHouse')
  },
  {
    path: '/item',
    name: 'item',
    component: require('components/WowItem/WowItemLookup')
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: require('components/Recipe/RecipeLookup')
  },
  {
    path: '/boss',
    name: 'boss',
    component: require('components/Boss/BossLookup')
  },
  {
    path: '/character',
    name: 'character',
    component: require('components/Character/CharacterLookup')
  },
  {
    path: '/settings',
    name: 'settings',
    component: require('components/Settings/Settings')
  },
  {
    path: '*',
    redirect: '/'
  }
]
