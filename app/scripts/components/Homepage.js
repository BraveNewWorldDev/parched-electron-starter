import React from 'react'
import PureRenderComponent from './PureRenderComponent'

export default class Homepage extends PureRenderComponent {
  state = {
    totalClicks: 0,
  }

  render () {
    return (
      <div>
        <p>
          Hello from React!
        </p>

        <p>
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>
            Click Here
          </button>
        </p>

        <p className="text-muted">
          (button has been clicked {this.state.totalClicks} times)
        </p>
      </div>
    )
  }

  handleClick (event) {
    this.setState({
      totalClicks: this.state.totalClicks + 1,
    })
  }
}
