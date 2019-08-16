import Filler from './player1HealthBarFiller'
import '../cssComponents/player1HealthBar.css'
import React from 'react'

export default class Player1HealthBar extends React.Component {

  render() {
    return (
      <div className="progress-bar">
        <Filler p1Health={this.props.p1Health}/>
      </div>
    )
  }
}
