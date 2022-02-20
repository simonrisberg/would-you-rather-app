import React, { Component } from "react";
import { connect } from 'react-redux';

class PollDetails extends Component {

  render() {

    const { question, author } = this.props

    return (
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

//TODO: Add a new view that will be shown if a user has answered a poll

function mapStateToProps({ authedUser, questions, users}, props) {
  
  const { id } = props.match.params

  const theCurrentQuestion = questions[id]

  const questionAuthor = theCurrentQuestion.author

  return {
    id,
    question: questions[id],
    author: users[questionAuthor]
  }
}

export default connect(mapStateToProps)(PollDetails)