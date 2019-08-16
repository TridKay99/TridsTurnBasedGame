import React from 'react';
import '../cssComponents/player2.css'
import { Popup } from 'semantic-ui-react'

class player2Attacks extends React.Component {

  render() {
    return (
      <div className="attackMoves">
      <Popup
            trigger={<button onClick={this.props.attackEnemy}>{this.props.p2moves.move1}</button>}
            content='Deal 5-20 damage!'
            hideOnScroll/>
      <Popup
            trigger={<button onClick={this.props.P2attack2WEAK}>{this.props.p2moves.move2}</button>}
            content='Enemy Does 2 Damage for 1 Turns!'
            hideOnScroll/>
      </div>
    );
  }
}

export default player2Attacks