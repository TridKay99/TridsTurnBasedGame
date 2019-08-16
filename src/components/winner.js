import React, { Component } from 'react'

export default class winner extends Component {

  state = {
    winner: null
  }

  render() {
    const { p1Health, p2Health } = this.props
    return (
      <div>
      {p1Health <= 0 ?
      <div className="p2Wins">
        <h2>Player2 Wins!!</h2>
      </div> 
      :
      <div className="p1Wins">
        <h2>Player1 Wins!!</h2>
        </div>}
      </div>
    )
  }
}
