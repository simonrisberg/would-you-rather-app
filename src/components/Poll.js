import React, { Component } from "react";
import { connect } from 'react-redux'

class Poll extends Component {


  render() {

    return (
      <div className='poll'>
        <img src={"https://tylermcginnis.com/would-you-rather/sarah.jpg"} alt={"Avatar"} className='avatar'></img>
        <text style={{ fontWeight: "bold" }}>Simon Risberg asks:</text>
        <div className='poll-info'>
          <text style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "15px" }}>Would you rather</text>
          <text>Code Javascript</text>
          <button className='poll-button'>View Poll</button>
        </div>
      </div>
    )
  }
}

export default Poll