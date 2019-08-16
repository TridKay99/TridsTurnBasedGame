import Filler from './p1SpecialBarFiller'
import '../cssComponents/p1SpecialBar.css'
import React from 'react'

export default class p1SpecialBar extends React.Component {

  render() {
    return (
      <div className="progress-bar">
        <Filler p1SpecialBar={this.props.p1SpecialBar}/>
      </div>
    )
  }
}
