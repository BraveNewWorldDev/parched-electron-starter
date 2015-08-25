import React from 'react/addons'

export default class PureRenderComponent extends React.Component {
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments)
  }
}
