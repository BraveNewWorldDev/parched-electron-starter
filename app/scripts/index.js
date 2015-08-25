import React from 'react'
import injectWebviewProperties from './util/injectWebviewProperties'

import App from './components/App'
React.render(
  <App />,
  document.getElementsByClassName('cosmos')[0]
)
