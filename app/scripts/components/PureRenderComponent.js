import React from 'react'
import shallowCompare from 'react/lib/shallowCompare'

export default class PureRenderComponent extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }
}
