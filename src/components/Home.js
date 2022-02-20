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

    const { unAnsweredQuestionsIsActive, answeredQuestions, unAnsweredQuestions } = this.props

    return (
      <div className='home-container'>
        <div className='home-buttons'>
          <button className='home-button' onClick={this.showUnansweredQuestions()} >Unanswered questions</button>
          <button className='home-button' onClick={this.showAnsweredQuestions()}>Answered questions</button>
        </div>
        {unAnsweredQuestionsIsActive ? unAnsweredQuestions.map((unAnsweredQuestion) => (
          <li key={unAnsweredQuestion.id}>
            <Poll question={unAnsweredQuestion} />
          </li>
        )) 
        
        :

        answeredQuestions.map((answeredQuestion) => (
          <li key={answeredQuestion.id}>
            <Poll question={answeredQuestion} />
          </li>
        )) 
        
        }

      </div>

    )
  }
}

function mapStateToProps({ questions, users, authedUser, unAnsweredQuestionsIsActive }) {
  
  const questionArray = Object.values(questions)
  const loggedInUser = users[authedUser]
  const answersArray = Object.keys(loggedInUser.answers)
  const answeredQuestions = questionArray.filter(question => answersArray.some(answer => answer === question.id))
  const unAnsweredQuestions = questionArray.filter(question => answersArray.every(answer => answer !== question.id))
  const sortedAnsweredQuestions = answeredQuestions.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1) 
  const sortedUnansweredQuestions = unAnsweredQuestions.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)

  return {
    unAnsweredQuestionsIsActive: unAnsweredQuestionsIsActive,
    answeredQuestions: sortedAnsweredQuestions,
    unAnsweredQuestions: sortedUnansweredQuestions
  }
}

export default connect(mapStateToProps)(Home)