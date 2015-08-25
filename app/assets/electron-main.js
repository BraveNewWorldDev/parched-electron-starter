'use strict'

// Sadly this file isn't process by parched, so it has to be written in
// ES5.
//
// Why is not process by parched?
// parched-tasks-webapp concats ALL vendor scripts to vendor.js,
// and it's bundle feature is a wrapper around browserify, which would get
// confused about the Electron-specific require statements in the file

var app = require('app')
var fs = require('fs')
var BrowserWindow = require('browser-window')

app.on('window-all-closed', function () {
  app.quit()
})

app.on('ready', function () {
  var window = new BrowserWindow({
    width: 1024,
    height: 768,
  })


  // If there exists a compiled app.asar package, don't connect to the
  // browserSync server
  if (fs.existsSync(process.resourcesPath + '/app.asar')) {
    window.loadUrl('file://' + __dirname + '/index.html')
  } else {
    window.loadUrl('http://localhost:3000/')
  }

  // TODO it would be nice if Electron could detect OS X's back action ...
  window.on('app-command', function () {
    console.log(arguments)
  })
})
