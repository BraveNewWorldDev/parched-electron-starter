// This needs to be first
import 'react-hot-loader/patch'
import './electron/injectModulesPath'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const rootEl = document.getElementById('cosmos')

function renderApp () {
  // The `require()` here is needed for hot loading.
  const App = require('./components/App').default
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./components/App', renderApp)
}
