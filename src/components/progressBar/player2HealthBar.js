import React, { Component } from 'react'
import Filler from './player2HealthBarFiller'
import '../cssComponents/player2HealthBar.css'

export default class player2HealthBar extends Component {
  render() {
    return (
      <div className="progress-bar">
        <Filler p2Health={this.props.p2Health}/>
      </div>
    )
  }
}
