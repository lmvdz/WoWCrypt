import api from './route/api'
import nonapi from './route/nonapi'

const EXPORT = (...args) => {
  let compiled = []
  for (var i = 0; i < args.length; i++) {
    compiled = compiled.concat(args[i])
  }
  return compiled
}

export default EXPORT(nonapi, api)
