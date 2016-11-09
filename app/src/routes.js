const files = require.context('./routes', false, /\.js$/)
let links = []

files.keys().forEach((key) => {
  links = links.concat(files(key).default)
})

export default links
