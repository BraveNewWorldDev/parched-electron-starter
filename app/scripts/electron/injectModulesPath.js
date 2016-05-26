// Electron module paths get confused when loading a page over HTTP
const path = window.electronRequire('path')
const globalPaths = window.electronRequire('module').globalPaths
const appModulesPath = path.join(
  window.electron.remote.app.getAppPath(),
  'node_modules'
)

if (globalPaths.indexOf(appModulesPath) === -1) {
  globalPaths.push(appModulesPath)
}
