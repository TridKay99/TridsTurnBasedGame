import React, { Component } from 'react'
import Player1 from './player1files/player1'
import Player2 from './player2files/player2';
import Winner from './winner'
import Player1HealthBar from './progressBar/player1HealthBar'
import Player2HealthBar from './progressBar/player2HealthBar'
import Player1SpecialBar from './progressBar/p1SpecialBar'
import Player2SpecialBar from './progressBar/p2SpecialBar'
import Music from './Music'

import './cssComponents/MainFightingPage.css'

export default class MainFightingPage extends Component {

  state = {
    turn: Math.random() >= 0.5,
    turnCounter: 0,
    p1Health: 100,
    p1SpecialBar: 0,
    p2Health: 100,
    p2SpecialBar: 0,
    weakP1: false,
    weakP2: false,
  }

  //IMPORTANT
  restartGame = () => {
    this.setState({
    turn: Math.random() >= 0.5,
    turnCounter: 0,
    p1Health: 100,
    p1SpecialBar: 0,
    p2Health: 100,
    p2SpecialBar: 0,
    weakP1: false,
    weakP2: false,
    })
  }

  changeTurn = () => {
    if(this.state.turn === true) {
      this.setState({ turn: false })
    } else {
      this.setState({ 
        turn: true,
        turnCounter: (this.state.turnCounter + 1)
      })
    }
  }

  attackEnemy = () => {
      if(this.state.turn === true) {
        if(this.state.weakP1 === true) {
        this.setState({
          p2Health: (this.state.p2Health) - 2,
          weakP1: false,
          p1SpecialBar: (this.state.p1SpecialBar + 4)
          })
        } else {
        this.setState({ 
          p2Health: (this.state.p2Health - this.randomDamage()),
          p1SpecialBar: (this.state.p1SpecialBar + 10)
          })
        }
      } else {
        if(this.state.weakP2 === true) {
        this.setState({
          p1Health: (this.state.p1Health - 2),
          weakP2: false,
          p2SpecialBar: (this.state.p2SpecialBar + 4)
        })
      } else {
        this.setState({ 
          p1Health: (this.state.p1Health - this.randomDamage()),
          p2SpecialBar: (this.state.p2SpecialBar + 10)
        })
      }
    }
  }

  p1SpecialAttack = () => {
    this.setState({ p2Health: 0 })
  }

  P1attack2WEAK = () => {
    this.setState({ weakP2: true })
  }

  P2attack2WEAK = () => {
    this.setState({ weakP1: true })
  }

  randomDamage = () => {
    return Math.floor(Math.random() * (12 - 2 + 1)) + 2;
  }

  heal1 = () => {
    if(this.state.turn === false) {
      this.setState({ p2Health: (this.state.p2Health + 20)})
    } else {
      this.setState({ p1Health: (this.state.p1Health + 20)})
    }
  }

  render() {
    return (
      <div className="MainFightingContainer">
        <div className="title">
          <h1>Sexy Fighturds</h1>
          <h2>Turn: {this.state.turnCounter}</h2>
        </div>
        <div className="healthContainer">
          <div className="p1health">
            <h2>Player1 Health</h2>
            <p>{this.state.p1Health}</p>
            <Player1HealthBar p1Health={this.state.p1Health} />
            <Player1SpecialBar p1SpecialBar={this.state.p1SpecialBar} />
          </div>
          <div className="p2health">
            <h2>Player2 Health</h2>
            <p>{this.state.p2Health}</p>
            <Player2HealthBar p2Health={this.state.p2Health} />
            <Player2SpecialBar p2SpecialBar={this.state.p2SpecialBar} />
          </div>
        </div>
        <div className="endTurnRestartButtonContainer">
          <button className="endTurnButton" onClick={this.changeTurn}>END TURN</button>
          <button className="restartButton" onClick={this.restartGame}>RESTART</button>
        </div>
        {this.state.turn === true ?
        <Player1 turn={this.state.turn}
                 p1health={this.state.p1Health}
                 attackEnemy={this.attackEnemy}
                 changeTurn={this.changeTurn}
                 heal1={this.heal1}
                 P1attack2WEAK={this.P1attack2WEAK}
                 p1SpecialBar={this.state.p1SpecialBar}
                 p1SpecialAttack={this.p1SpecialAttack}
                 /> :

        <Player2 turn={this.state.turn}
                 p2Health={this.state.p2Health}
                 attackEnemy={this.attackEnemy}
                 changeTurn={this.changeTurn}
                 heal1={this.heal1}
                 P2attack2WEAK={this.P2attack2WEAK}
                 />
        }
        {(this.state.p1Health <= 0 || this.state.p2Health <= 0) ?
        <div className="WINNER">
          <Winner  p1Health={this.state.p1Health}
                   p2Health={this.state.p2Health}/>
        </div>
                   :
          null }
          <div>
            <Music />
          </div>
      </div>
    )
  }
}
