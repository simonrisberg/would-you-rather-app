import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from "../actions/questions";
import { Redirect } from 'react-router-dom'

class PollDetails extends Component {

  state = {
    selectedOption: "",
    toHome: false
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { selectedOption } = this.state
    const { dispatch, authedUser, id } = this.props

    dispatch(handleAddQuestionAnswer({authedUser, id, selectedOption}))

    this.setState(() => ({
      selectedOption: '',
      toHome: true
    }))
  }

  render() {

    const { question, author, authedUser } = this.props

    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

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
                  value="optionTwo"
                  onChange={this.handleOptionChange}
                />
                {question.optionOne.text}
              </label>
              <label>
                <input
                  type="radio"
                  name="pollOption"
                  value="optionOne"
                  onChange={this.handleOptionChange}
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

  return {
    id,
    question: questions[id],
    author: users[questionAuthor]
  }
}

export default connect(mapStateToProps)(PollDetails)