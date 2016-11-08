export default [
  {
    path: '/',
    name: 'home',
    component: require('components/Home')
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
