parched-electron
================

Easily build upon parched-tasks-webapp to create a desktop application
using Electron.

Features
--------

- Bower
- React
- CoffeeScript (in `vendor/scripts/` and browserify)
- Jade (in `app/views/`, `vendor/views/` and browserify)
- Sass (in `app/styles/` and `vendor/styles/`)
- Ordering of any concat'd files via before and after properties
- Builds a webfont based on .svg files in `app/assets/glyphs/`
- Build both a retina and non-retina spritemap based on .svg files in `app/assets/sprites/`
- Minify javascript in production
- Minify css in production
- Error hard in production
- Use browserSync in development
- Stay out of your way
- Allow you to intervene at pretty much any point
- Karma + Jasmine for tests

Since it is built on parched and parched-tasks-webapp, let's imagine you
prefer Less to Sass and would like to set it up:

```
npm install --save parched-less
```

That's it.

Usage
-----

```bash
# Clone the main repository
git clone https://github.com/mikew/parched-electron.git
cd parched-electron/
npm install
bower install

# Run clean task
gulp parched-clean

# Run build task in "production"
# aka minify, hard errors
NODE_ENV=production gulp parched-build

# Clean, build, and watch
# This triggers electron-connect
gulp parched-clean && gulp parched-watch
```
