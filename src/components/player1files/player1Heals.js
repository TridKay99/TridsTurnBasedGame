import React, { Component } from 'react'

export default class player1Heals extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.heal1}>Mint Potion!</button>
      </div>
    )
  }
}
