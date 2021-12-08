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

    console.log("UNANSWERED QUESTIONS", unAnsweredQuestions)
    console.log("ANSWERED QUESTIONS", answeredQuestions)
    console.log("IS ACTIVE", unAnsweredQuestionsIsActive)

    return (
      <div className='home-container'>
        <div className='home-buttons'>
          <button className='home-button' onClick={this.showUnansweredQuestions()} >Unanswered questions</button>
          <button className='home-button' onClick={this.showAnsweredQuestions()}>Answered questions</button>
        </div>
        {unAnsweredQuestionsIsActive ? this.props.unAnsweredQuestions.map((unAnsweredQuestion) => (
          <li key={unAnsweredQuestion.id}>
            <Poll question={unAnsweredQuestion} />
          </li>
        )) 
        
        :

        this.props.answeredQuestions.map((answeredQuestion) => (
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

  return {
    questions: Object.values(questions),
    unAnsweredQuestionsIsActive: unAnsweredQuestionsIsActive,
    answeredQuestions: questionArray.filter(question => answersArray.some(answer => answer === question.id)),
    unAnsweredQuestions: questionArray.filter(question => answersArray.every(answer => answer !== question.id))
  }
}

export default connect(mapStateToProps)(Home)