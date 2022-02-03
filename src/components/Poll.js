import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Poll extends Component {


  render() {

    const { question, user } = this.props

    const { id } = question

    return (
      <div className='poll'>
        <img src={user.avatarURL} alt={"Avatar"} className='avatar'></img>
        <span style={{ fontWeight: "bold" }}>{question.author} asks:</span>
        <div className='poll-info'>
          <span style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "15px" }}>Would you rather</span>
          <span>{question.optionOne.text}</span>
          <button className='poll-button'>View Poll</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, { question }) {

  const user = users[question.author]

  return {
    question: question,
    user: user
  }
}

export default withRouter(connect(mapStateToProps)(Poll))