const files = require.context('.', true, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  if (key === './index.js' ||
    key.endsWith('types.js') ||
    key.endsWith('actions.js') ||
    key.endsWith('getters.js') ||
    key.endsWith('mutations.js')) return
    /*
    regex to get filename w/o extension
      "/^(.*\/)|(\.js)/g"
    */
  modules[key.replace(/^(.*\/)|(\.js)/g, '')] = files(key).default
})

export default modules
