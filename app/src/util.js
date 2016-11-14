const files = require.context('./util', true, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  /*
  regex to get filename w/o extension
    "/^(.*\/)|(\.js)/g"
  */
  modules[key.replace(/^(.*\/)|(\.js)/g, '')] = files(key).default
})

export default modules
