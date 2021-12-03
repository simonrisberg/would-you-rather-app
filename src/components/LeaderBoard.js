import React, { Component } from "react";
import { connect } from 'react-redux'

class LeaderBoard extends Component {

  render() {

    return (
      <div className="leaderboard-container">
        <div className='leaderboard'>
          <img src={"https://tylermcginnis.com/would-you-rather/tyler.jpg"} alt={"Avatar"} className='leaderboard-img-container'></img>
          <div className='leaderboard-text-container'>
            <h2>Simon Risberg</h2>
            <div className='leaderboard-questions-container'>
              <p>Answered questions</p>
              <p>7</p>
            </div>
            <div className='leaderboard-questions-container'>
              <p>Created questions</p>
              <p>3</p>
            </div>
          </div>
          <div className='leaderboard-score-container'>
            <p className='leaderboard-score-text'>Score</p>
            <div className='leaderboard-score'>
              <p style={{textAlign: "center", marginTop: "22px"}}>10</p>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default connect()(LeaderBoard)