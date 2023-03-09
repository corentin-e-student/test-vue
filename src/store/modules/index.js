const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(filename => {
  // create the module name from fileName
  const moduleName = filename
    .replace(/(\.\/|\.js|-)/g, '')

  modules[moduleName] = requireModule(filename).default || requireModule(filename)
})

export default modules