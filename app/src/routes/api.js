export default [
  {
    path: '/achievement',
    name: 'achievement',
    component: require('components/API/Achievement/AchievementLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#7000ff'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/auction-house',
    name: 'auction-house',
    component: require('components/API/AuctionHouse/AuctionHouse'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#c598ff'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'bottom'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/item',
    name: 'item',
    component: require('components/API/WowItem/WowItemLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#36719c'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'right'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: require('components/API/Recipe/RecipeLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#50b12d'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'left'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/boss',
    name: 'boss',
    component: require('components/API/Boss/BossLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ff3600'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/character',
    name: 'character',
    component: require('components/API/Character/CharacterLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#0021ff'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'left'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/guild',
    name: 'guild',
    component: require('components/API/Guild/GuildLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#765d95'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'right'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/mount',
    name: 'mount',
    component: require('components/API/Mount/MountLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#47276f'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'bottom'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/pet',
    name: 'pet',
    component: require('components/API/Pet/PetLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#bfb814'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/pvp',
    name: 'pvp',
    component: require('components/API/PvP/PvPLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#2aaba7'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/quest',
    name: 'quest',
    component: require('components/API/Quest/QuestLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#8e40f1'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'right'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/realm',
    name: 'realm',
    component: require('components/API/Realm/RealmLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#5bb665'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'left'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/zone',
    name: 'zone',
    component: require('components/API/Zone/ZoneLookup'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#906532'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'left'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: true},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  }
]
