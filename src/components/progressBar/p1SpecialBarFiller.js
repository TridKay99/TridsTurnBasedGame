import '../cssComponents/player1HealthBar.css'
import React from 'react'


export default class P1SpecialBarFiller extends React.Component {
  render() {
    return (
      <div className="special-filler" style={{ width: `${this.props.p1SpecialBar}%`}} />
    )
  }
}
