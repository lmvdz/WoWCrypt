const files = require.context('.', true, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  console.log(key)
  if (key === './index.js' || key.endsWith('types.js')) {
    return
  }
  // "/^(.*\/)|(\.js)/g"
  modules[key.replace(/^(.*\/)|(\.js)/g, '')] = files(key).default
})

export default modules
