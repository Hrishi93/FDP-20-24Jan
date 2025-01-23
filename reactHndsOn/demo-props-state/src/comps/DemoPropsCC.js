import React, { Component } from 'react'

export default class DemoPropsCC extends Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.country}</h1>
      </div>
    )
  }
}
