import React, { Component } from "react";
import { connect } from 'react-redux'

class Poll extends Component {


  render() {

    const { question, user } = this.props

    console.log("QUESTION", question)

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

function mapStateToProps({ questions, users }, { id }) {

  console.log("ID", id)

  const question = questions[id]
  const user = users[question.author]

  
  
  return {
    question: question,
    user: user
  }
}

export default connect(mapStateToProps)(Poll)