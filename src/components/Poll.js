import React, { Component } from "react";
import { connect } from 'react-redux'

class Poll extends Component {


  render() {

    return (
      <div className='poll'>
        <img src={"https://tylermcginnis.com/would-you-rather/sarah.jpg"} alt={"Avatar"} className='avatar'></img>
        <span style={{ fontWeight: "bold" }}>Simon Risberg asks:</span>
        <div className='poll-info'>
          <span style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "15px" }}>Would you rather</span>
          <span>Code Javascript</span>
          <button className='poll-button'>View Poll</button>
        </div>
      </div>
    )
  }
}

export default Poll