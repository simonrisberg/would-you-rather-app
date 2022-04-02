import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from "../actions/questions";
import { Redirect } from 'react-router-dom'

class PollDetails extends Component {

  state = {
    answer: "",
    toHome: false
  }

  handleOptionChange = (e) => {
    this.setState({
      answer: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { answer } = this.state
    const { dispatch, authedUser, qid } = this.props

    console.log("SELECTED OPTION", answer)
    console.log("AUTHED USER", authedUser)
    console.log("QUESTION ID", qid)

    dispatch(handleAddQuestionAnswer({qid, authedUser, answer}))

    this.setState(() => ({
      answer: '',
      toHome: true
    }))
  }

  render() {

    const { question, author } = this.props

    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className="poll-details">
        <h2>{author.name} asks:</h2>
        <div className="poll-details-info">
          <img src={author.avatarURL} alt={"Avatar"} className='poll-details-img'></img>
          <form onSubmit={this.handleSubmit}>
            <div className="poll-details-choice">
              <h2>Would you rather</h2>
              <label style={{ marginBottom: "20px" }}>
                <input
                  type="radio"
                  name="pollOption"
                  value="optionOne"
                  onChange={this.handleOptionChange}
                />
                {question.optionOne.text}
              </label>
              <label>
                <input
                  type="radio"
                  name="pollOption"
                  value="optionTwo"
                  onChange={this.handleOptionChange}
                />
                {question.optionTwo.text}
              </label>
              <button className="new-question-btn" type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
    )
  }

}

function mapStateToProps({ authedUser, questions, users}, { id }) {
  
  

  const theCurrentQuestion = questions[id]

  const questionAuthor = theCurrentQuestion.author

  return {
    qid: id,
    question: questions[id],
    author: users[questionAuthor],
    authedUser,
  }
}

export default connect(mapStateToProps)(PollDetails)