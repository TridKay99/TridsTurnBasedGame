import React from 'react';
import { Popup } from 'semantic-ui-react'

class player1Attacks extends React.Component {

  render() {

    const { p1moves, attackEnemy, p1SpecialAttack, P1attack2WEAK } = this.props

    return (
      <div className="attackMoves">
        <Popup
              trigger={<button onClick={attackEnemy}>{p1moves.move1}</button>}
              content='Deal 5-20 damage!'
              hideOnScroll />
        <Popup
              trigger={<button onClick={P1attack2WEAK}>{p1moves.move2}</button>}
              content='Enemy Does 2 Damage for 1 Turns!'
              hideOnScroll />
        {this.props.p1SpecialBar === 100 ? 
        <Popup
              trigger={<button onClick={p1SpecialAttack}>{p1moves.specialMove}</button>}
              content='40 damage over 5 turns!'
              hideOnScroll /> :
              null
        }
      </div>
    );
  }
}

export default player1Attacks