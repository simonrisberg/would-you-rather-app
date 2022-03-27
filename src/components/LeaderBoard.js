import React, { Component } from "react";
import { connect } from 'react-redux'

class LeaderBoard extends Component {

  render() {

    const { users } = this.props

    console.log("USERS", users)

    return (

      <div className="leaderboard-container">
        {users.map((user) => (
          <li key={user.id}>
            <div className='leaderboard'>
              <img src={user.avatarURL} alt={"Avatar"} className='leaderboard-img-container'></img>
              <div className='leaderboard-text-container'>
                <h2>{user.name}</h2>
                <div className='leaderboard-questions-container'>
                  <p>Answered questions</p>
                  <p>{Object.values(user.answers).length}</p>
                </div>
                <div className='leaderboard-questions-container'>
                  <p>Created questions</p>
                  <p>{user.questions.length}</p>
                </div>
              </div>
              <div className='leaderboard-score-container'>
                <p className='leaderboard-score-text'>Score</p>
                <div className='leaderboard-score'>
                  <p style={{ textAlign: "center", marginTop: "22px" }}>{user.questions.length + Object.values(user.answers).length}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    )
  }

}

function mapStateToProps({ users }) {

  const formattedUsers = Object.values(users).map(user => (
    { ...user, totalScore: user.questions.length + Object.values(user.answers).length }
  ))

  return {
    users: formattedUsers.sort((a, b) => (a.totalScore > b.totalScore) ? -1 : 1)
  }
}

export default connect(mapStateToProps)(LeaderBoard)