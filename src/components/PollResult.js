import React, { Component } from "react";
import { connect } from "react-redux";
import { Progress } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";

class PollResult extends Component {

  render() {

    const { question, author, totalNumberOfVotes, percentVotedForQuestionOne, percentVotedForQuestionTwo, loggedInUser, chosenOption } = this.props

    if(loggedInUser === null) {
      return <Redirect to='/' />
    }

    console.log("TOTAL NUMBER", totalNumberOfVotes)


    return (
      <div className='poll-result-container'>
        <h2 className='poll-result-headline'>Asked by {author.name}</h2>
        <div className='poll-result-info-container'>
          <div className='poll-result-img-container'>
            <img src={author.avatarURL} alt={"Avatar"} className='poll-result-img'></img>
          </div>
          <div className='poll-result-vote-container'>
            <h2>Results:</h2>
            {chosenOption != 'optionTwo' ?
              <div className='poll-result-box-highlighted'>
                <p style={{ fontWeight: 'bold' }}>Would you rather {question.optionOne.text} ?</p>
                <Progress value={percentVotedForQuestionOne} color={"success"}>{percentVotedForQuestionOne}%</Progress>
                <p>{question.optionOne.votes.length} out of {totalNumberOfVotes} votes</p>
              </div>
              : <div className='poll-result-box'>
                <p style={{ fontWeight: 'bold' }}>Would you rather {question.optionOne.text} ?</p>
                <Progress value={percentVotedForQuestionOne} color={"success"}>{percentVotedForQuestionOne}%</Progress>
                <p>{question.optionOne.votes.length} out of {totalNumberOfVotes} votes</p>
              </div>

            }
            {chosenOption === 'optionTwo' ?
              <div className='poll-result-box-highlighted'>
                <p style={{ fontWeight: 'bold' }}>Would you rather {question.optionTwo.text} ?</p>
                <Progress value={percentVotedForQuestionTwo} color={"success"}>{percentVotedForQuestionTwo}%</Progress>
                <p>{question.optionTwo.votes.length} out of {totalNumberOfVotes} votes</p>
              </div>
              : <div className='poll-result-box'>
                <p style={{ fontWeight: 'bold' }}>Would you rather {question.optionTwo.text} ?</p>
                <Progress value={percentVotedForQuestionTwo} color={"success"}>{percentVotedForQuestionTwo}%</Progress>
                <p>{question.optionTwo.votes.length} out of {totalNumberOfVotes} votes</p>
              </div>

            }

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }, { author, question }) {


  const totalNumberOfVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const loggedInUser = users[authedUser]

  return {
    question: question,
    author: author,
    totalNumberOfVotes: totalNumberOfVotes,
    percentVotedForQuestionOne: question.optionOne.votes.length / totalNumberOfVotes * 100,
    percentVotedForQuestionTwo: question.optionTwo.votes.length / totalNumberOfVotes * 100,
    loggedInUser: loggedInUser,
    chosenOption: loggedInUser.answers[question.id]

  }
}

export default connect(mapStateToProps)(PollResult)