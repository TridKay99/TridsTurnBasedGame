import React from 'react'
import EpicMusic from './EpicMusic.mp3'
import ReactAudioPlayer from 'react-audio-player'

class Music extends React.Component {

  render() {
    return (
      <React.Fragment>
        <ReactAudioPlayer
        src={EpicMusic}
        autoPlay
        controls
        />
      </React.Fragment>
    );
  }
}

export default Music;