import React, { Component } from "react";
import { connect } from "react-redux";
import { Progress } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

class PollResult extends Component {

  render() {

    const { question, author, totalNumberOfVotes, percentVotedForQuestionOne, percentVotedForQuestionTwo } = this.props

    return(
      <div className='poll-result-container'>
        <h2 className='poll-result-headline'>Asked by {author.name}</h2>
        <div className='poll-result-info-container'>
          <div className='poll-result-img-container'>
            <img src={author.avatarURL} alt={"Avatar"} className='poll-result-img'></img>
          </div>
          <div className='poll-result-vote-container'>
            <h2>Results:</h2>
            <div className='poll-result-box'>
              <p style={{fontWeight: 'bold'}}>Would you rather {question.optionOne.text} ?</p>
              <Progress value={percentVotedForQuestionOne} color={"success"}>{percentVotedForQuestionOne}%</Progress>
              <p>1 out of {totalNumberOfVotes} votes</p>
            </div>
            <div className='poll-result-box'>
              <p style={{fontWeight: 'bold'}}>Would you rather {question.optionTwo.text} ?</p>
              <Progress value={percentVotedForQuestionTwo} color={"success"}>{percentVotedForQuestionTwo}%</Progress>
              <p>1 out of {totalNumberOfVotes} votes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, {author, question}) {


  const totalNumberOfVotes = question.optionOne.votes.length + question.optionTwo.votes.length

  return {
    question: question,
    author: author,
    totalNumberOfVotes: totalNumberOfVotes,
    percentVotedForQuestionOne: question.optionOne.votes.length / totalNumberOfVotes * 100,
    percentVotedForQuestionTwo: question.optionTwo.votes.length / totalNumberOfVotes * 100
    
  }
}

export default connect(mapStateToProps)(PollResult)