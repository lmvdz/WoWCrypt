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
  },
  {
    path: '/guild',
    name: 'guild',
    component: require('components/API/Guild/GuildLookup')
  },
  {
    path: '/mount',
    name: 'mount',
    component: require('components/API/Mount/MountLookup')
  },
  {
    path: '/pet',
    name: 'pet',
    component: require('components/API/Pet/PetLookup')
  },
  {
    path: '/pvp',
    name: 'pvp',
    component: require('components/API/PvP/PvPLookup')
  },
  {
    path: '/quest',
    name: 'quest',
    component: require('components/API/Quest/QuestLookup')
  },
  {
    name: '/realm',
    path: 'realm',
    component: require('components/API/Realm/RealmLookup')
  },
  {
    path: '/zone',
    name: 'zone',
    component: require('components/API/Zone/ZoneLookup')
  }
]
