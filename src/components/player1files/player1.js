import '../cssComponents/player1.css'
import React, { Component } from 'react'
import Player1Attacks from './player1Attacks'
import Player1Heals from './player1Heals'

export default class player1 extends Component {

  state = {
    p1moves: {
      // will damage between 5-20
      move1: "Sexy Kick",
      // will weaken other players attacks
      move2: "Say Hi",
      specialMove: "Full Dead"
    },
    attackOpen: false,
    healOpen: false
  }

  attackMovesOpen = () => {
    if(this.state.attackOpen === false) {
      this.setState({ attackOpen: true})
      this.setState({ healOpen: false})
    } else {
      this.setState({ attackOpen: false})
      this.setState({ healOpen: false})
    }
  }

  healMovesOpen = () => {
    if(this.state.healOpen === false) {
      this.setState({ healOpen: true })
      this.setState({ attackOpen: false})
    } else {
      this.setState({ healOpen: false})
      this.setState({ attackOpen: false})
    }
  }

  render() {
    console.log("p1specialBar", this.props.p1SpecialBar)
    return (
      <React.Fragment>
        <div className="player1Container">
          <div className="player1">
            <h1>PLAYER 1's TURN</h1>
            <button onClick={this.attackMovesOpen}>Fight</button>
            <button onClick={this.healMovesOpen}>Heal</button>
            {this.state.attackOpen ? 
            <Player1Attacks p1moves={this.state.p1moves} 
                            attackEnemy={this.props.attackEnemy}
                            P1attack2WEAK={this.props.P1attack2WEAK}
                            p1SpecialBar={this.props.p1SpecialBar}
                            p1SpecialAttack={this.props.p1SpecialAttack}
                            /> : 
                            null }
            {this.state.healOpen ?
            <Player1Heals   heal1={this.props.heal1}/> :
            null
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
