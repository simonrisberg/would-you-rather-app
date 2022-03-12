import React, { Component } from "react";
import { connect } from 'react-redux';
import PollResult from "./PollResult";

class PollDetails extends Component {

  render() {

    const { question, author, authedUser } = this.props

    const isAnswered = authedUser.answers[question.id] ? true : false


    return (
      isAnswered
      ?
      <PollResult author={author} question={question} />
      :
      <div className="poll-details">
        <h2>{author.name} asks:</h2>
        <div className="poll-details-info">
          <img src={author.avatarURL} alt={"Avatar"} className='poll-details-img'></img>
          <form>
            <div className="poll-details-choice">
              <h2>Would you rather</h2>
              <label style={{ marginBottom: "20px" }}>
                <input
                  type="radio"
                  name="pollOption"
                  value="optionOne"
                />
                {question.optionOne.text}
              </label>
              <label>
                <input
                  type="radio"
                  name="pollOption"
                  value="optionTwo"

                />
                {question.optionTwo.text}
              </label>
              <button className="new-question-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

function mapStateToProps({ authedUser, questions, users}, props) {
  
  const { id } = props.match.params

  const theCurrentQuestion = questions[id]

  const questionAuthor = theCurrentQuestion.author

  const authedUserInformation = users[authedUser]

  return {
    id,
    question: questions[id],
    author: users[questionAuthor],
    authedUser: authedUserInformation
  }
}

export default connect(mapStateToProps)(PollDetails)