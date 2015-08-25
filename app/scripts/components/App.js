import React from 'react'
import PureRenderComponent from './PureRenderComponent'
import Homepage from './Homepage'

export default class App extends PureRenderComponent {
  render () {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}
