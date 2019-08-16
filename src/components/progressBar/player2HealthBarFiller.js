import React from 'react'
import '../cssComponents/player2HealthBar.css'

export default class Player2HealthBarFiller extends React.Component {
  render() {
    return (
      <div className="filler" style={{ width: `${this.props.p2Health}%`}} />
    )
  }
}
