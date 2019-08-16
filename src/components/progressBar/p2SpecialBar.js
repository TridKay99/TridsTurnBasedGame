import Filler from './p2SpecialBarFiller'
import '../cssComponents/p2SpecialBar.css'
import React from 'react'

export default class p2SpecialBar extends React.Component {

  render() {
    return (
      <div className="progress-bar">
        <Filler p2SpecialBar={this.props.p2SpecialBar}/>
      </div>
    )
  }
}
