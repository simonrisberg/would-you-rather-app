import React, { Component } from "react";
import { connect } from "react-redux";
import { Progress } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

class PollResult extends Component {

  render() {

    return(
      <div className='poll-result-container'>
        <h2 className='poll-result-headline'>Asked by Simon Risberg</h2>
        <div className='poll-result-info-container'>
          <div className='poll-result-img-container'>
            <img src={'https://tylermcginnis.com/would-you-rather/tyler.jpg'} alt={"Avatar"} className='poll-result-img'></img>
          </div>
          <div className='poll-result-vote-container'>
            <h2>Results:</h2>
            <div className='poll-result-box'>
              <p style={{fontWeight: 'bold'}}>Would you rather code JavaScript?</p>
              <Progress value={100} color={"success"} />
              <p>1 out of 2 votes</p>
            </div>
            <div className='poll-result-box'>
              <p style={{fontWeight: 'bold'}}>Would you rather code JavaScript?</p>
              <Progress value={100} color={"success"} />
              <p>1 out of 2 votes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect()(PollResult)