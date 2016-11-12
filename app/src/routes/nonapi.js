export default [
  {
    path: '/',
    name: 'home',
    component: require('components/Home'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#092e0d'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'right'},
          {call: 'transition', modifier: 'temp', argument: {time: '2.0s', opacity: '0.6s'}},
          {call: 'inverse', modifier: 'temp', argument: false},
          {call: 'thickness', modifier: 'temp', argument: '10px'}
        ]
      }
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: require('components/Settings/Settings'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#beffc5'},
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
    path: '*',
    redirect: '/'
  }
]
