var Parched = require('parched')
var gulp = require('gulp')
var electronPackager = require('electron-packager')
var electron = require('electron-connect').server.create({
  path: 'public'
});
var hasBuiltOnce = false

function startElectronConnect (done) {
  if (!global.isWatching) {
    done()
    return
  }

  if (hasBuiltOnce) {
    done()
    return
  }

  // Start electron process
  electron.start();

  // Restart electron process
  gulp.watch([
    'app/assets/electron-main.js',
    'Parched-config.js',
    'Gulpfile.js',
  ], electron.restart);

  hasBuiltOnce = true
  done()
}

var path = require('path')
function buildElectronApp (done) {
  if (global.isWatching) {
    done()
    return
  }

  var config = Parched.getAppConfig()
  var defaultConfig = {
    dir: 'public',
    name: path.basename(process.cwd()),
    platform: 'darwin',
    arch: 'x64',
    version: '0.31.0',
    out: 'dist',
    ignore: /^\/dist$/,
    prune: true,
    asar: true,
    overwrite: true,
  }
  var electronPackagerOptions = Parched.vendor.xtend(
    {},
    defaultConfig,
    config.electron
  )

  electronPackager(electronPackagerOptions, function (err, appPath) {
    done(err)
  })
}

module.exports = {
  gulp: gulp,

  parchedDidBuild: function (doneParched) {
    startElectronConnect(function (err) {
      buildElectronApp(doneParched)
    })
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
  },

  plugins: {
    order: {
      after: [
        'parched-imagemin',
      ],
    },

    'parched-babel': {
      stage: 0,
    },

    'parched-svg2png': {
      outputCSS: 'styles/_sprites.sass',
      usePlaceholderSelectors: false,
    },

    'parched-webfont': {
      outputCSS: 'styles/_glyphs.sass',
      usePlaceholderSelectors: false,
    },

    'parched-sass': {
      indentedSyntax: true,
    }
  }
};
