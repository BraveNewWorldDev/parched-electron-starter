parched-electron
================

Easily build upon parched-tasks-webapp to create a desktop application
using Electron.

Features
--------

- Bower
- React
- Sass (in `app/styles/` and `vendor/styles/`)
- Ordering of any concat'd files via before and after properties
- Minify javascript in production
- Minify css in production
- Error hard in production
- Use hot module loading in development
- Stay out of your way
- Allow you to intervene at pretty much any point

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
git clone https://github.com/BraveNewWorldDev/parched-electron-starter.git
cd parched-electron-starter/
npm install
bower install

# Run clean task
./node_modules/.bin/gulp parched-clean

# Run build task in "production"
# aka minify, hard errors
NODE_ENV=production ./node_modules/.bin/gulp parched-build

# Clean, build, and watch
# This triggers electron-connect
./node_modules/.bin/gulp parched-clean && ./node_modules/.bin/gulp parched-watch
```
