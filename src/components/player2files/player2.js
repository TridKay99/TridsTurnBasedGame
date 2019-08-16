import React, { Component } from 'react'
import '../cssComponents/player2.css'
import Player2Attacks from './player2Attacks'
import Player2Heals from './player2Heals'


export default class player2 extends Component {

  state = {
    p2moves: {
      // will damage between 5-20
      move1: "Whip Lash",
      // will weaken damage
      //ADD POPUPS TO EXPLAIN WHAT HAPPENS
      move2: "Simple Chop",
    },
    attackOpen: false,
    healOpen: false
  }

  attackMovesOpen = () => {
    if(this.state.attackOpen === false) {
      this.setState({ attackOpen: true})
      this.setState({ healOpen: false })
    } else {
      this.setState({ attackOpen: false})
      this.setState({ healOpen: false })
    }
  }

  healMovesOpen = () => {
    if(this.state.healOpen === false) {
      this.setState({ healOpen: true })
      this.setState({ attackOpen: false})
    } else {
      this.setState({ healOpen: false })
      this.setState({ attackOpen: false})
    }
  }

  render() {
    return (
        <React.Fragment>
        <div className="player2Container">
          <div className="player2">
            <h1>PLAYER 2's TURN</h1>
            <button onClick={this.attackMovesOpen}>Fight</button>
            <button onClick={this.healMovesOpen}>Heal</button>
            {this.state.attackOpen ? 
            <Player2Attacks p2moves={this.state.p2moves} 
                            attackEnemy={this.props.attackEnemy}
                            P2attack2WEAK={this.props.P2attack2WEAK}/> :
                            null }
            {this.state.healOpen ?
            <Player2Heals   heal1={this.props.heal1}/> :
                            null }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

