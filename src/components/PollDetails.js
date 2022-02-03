import React, { Component } from "react";
import { connect } from 'react-redux';

class PollDetails extends Component {

  render() {

    const { question } = this.props

    console.log("QUESTION", question)

    return (
      <div className="poll-details">
        <h2>Simon Risberg asks:</h2>
        <div className="poll-details-info">
          <img src={"https://tylermcginnis.com/would-you-rather/tyler.jpg"} alt={"Avatar"} className='poll-details-img'></img>
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
  
  return {
    id,
    question: questions[id] 
  }
}

export default connect(mapStateToProps)(PollDetails)