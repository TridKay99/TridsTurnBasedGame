import '../cssComponents/player1HealthBar.css'
import React from 'react'


export default class progressBarFiller extends React.Component {
  render() {
    return (
      <div className="filler" style={{ width: `${this.props.p1Health}%`}} />
    )
  }
}
