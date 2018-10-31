// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  resolutionHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  bitrateHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render(){
    return(
      <div>
      <button key="youtube-button-1" className="bitrate" onClick={this.bitrateHandler}>Bitrate button</button>
      <button key="youtube-button-2" className="resolution" onClick={this.resolutionHandler}>Resolution button</button>
      </div>
    )
  }

}
