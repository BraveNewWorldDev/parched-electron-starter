var Parched = require('parched')
var gulp = require('gulp')
var startElectron = require('parched-tasks-electron/lib/startElectron')

module.exports = {
  gulp: gulp,

  parchedDidBuild: function (doneParched) {
    startElectron(doneParched)
  },

  webapp: {
    files: {
      order: {
        before: [
          /jquery\.js/,
          /bootstrap\.js/,
        ],
      },
    },

    bundles: {
      app: {
        hasHMR: true,
      },
    },

    browserSyncOptions: {
      open: false,
    },
  },

  plugins: {
    'parched-sass': {
      indentedSyntax: true,
    },
  },
}
