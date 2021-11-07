import React, { Component } from "react";
import { connect } from 'react-redux'
import { toggleUnAnsweredQuestions } from "../actions/unAnsweredQuestionsIsActive";
import Poll from "./Poll";

class Home extends Component {

  showUnansweredQuestions = () => {
    return () => {
      this.props.dispatch(toggleUnAnsweredQuestions(true))
    }
  }

  showAnsweredQuestions = () => {
    return () => {
      this.props.dispatch(toggleUnAnsweredQuestions(false))
    }
  }

  render() {

    return (
      <div className='home-container'>
        <div className='home-buttons'>
          <button className='home-button' onClick={this.showUnansweredQuestions()} >Unanswered questions</button>
          <button className='home-button' onClick={this.showAnsweredQuestions()}>Answered questions</button>
        </div>
        {this.props.questions.map((question) => (
          <li key={question.id}>
            <Poll id={question.id} />
          </li>
        ))}

      </div>

    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questions: Object.values(questions)
  }
}

export default connect(mapStateToProps)(Home)