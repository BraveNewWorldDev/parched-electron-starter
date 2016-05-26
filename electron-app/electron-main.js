import {
  app,
  BrowserWindow,
} from 'electron'

import fs from 'fs'

app.on('window-all-closed', function () {
  app.quit()
})

app.on('ready', function () {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
  })


  // If there exists a compiled app.asar package, don't connect to the
  // browserSync server
  if (fs.existsSync(process.resourcesPath + '/app.asar')) {
    window.loadURL('file://' + __dirname + '/index.html')
  } else {
    window.loadURL('http://localhost:3000/')
  }

  // TODO it would be nice if Electron could detect OS X's back action ...
  window.on('app-command', function () {
    console.log(arguments)
  })
})
