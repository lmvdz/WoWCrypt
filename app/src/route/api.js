export default [
  {
    path: '/achievement',
    name: 'achievement',
    component: require('components/API/Achievement/AchievementLookup')
  },
  {
    path: '/auction-house',
    name: 'auction-house',
    component: require('components/API/AuctionHouse/AuctionHouse')
  },
  {
    path: '/item',
    name: 'item',
    component: require('components/API/WowItem/WowItemLookup')
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: require('components/API/Recipe/RecipeLookup')
  },
  {
    path: '/boss',
    name: 'boss',
    component: require('components/API/Boss/BossLookup')
  },
  {
    path: '/character',
    name: 'character',
    component: require('components/API/Character/CharacterLookup')
  }
]
