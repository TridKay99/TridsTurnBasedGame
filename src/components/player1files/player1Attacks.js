import React from 'react';
import { Popup } from 'semantic-ui-react'

class player1Attacks extends React.Component {

  render() {
console.log("p1specialBar", this.props.p1SpecialBar)
    return (
      <div className="attackMoves">
        <Popup
              trigger={<button onClick={this.props.attackEnemy}>{this.props.p1moves.move1}</button>}
              content='Deal 5-20 damage!'
              hideOnScroll />
        <Popup
              trigger={<button onClick={this.props.P1attack2WEAK}>{this.props.p1moves.move2}</button>}
              content='Enemy Does 2 Damage for 1 Turns!'
              hideOnScroll />
        {this.props.p1SpecialBar === 100 ? 
        <Popup
              trigger={<button onClick={this.props.p1SpecialAttack}>{this.props.p1moves.specialMove}</button>}
              content='kills EVERYTHING!'
              hideOnScroll /> :
              null
        }
      </div>
    );
  }
}

export default player1Attacks