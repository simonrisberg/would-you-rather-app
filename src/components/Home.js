import React, { Component } from "react";
import { connect } from 'react-redux'
import Poll from "./Poll";

class Home extends Component {

  render() {

    return (
      <div className='home-container'>
        <div className='home-buttons'>
          <button className='home-button'>Unanswered questions</button>
          <button className='home-button'>Answered questions</button>
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