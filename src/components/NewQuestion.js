import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {

  state = {
    textOne: '',
    textTwo: '',
    toHome: false
  }

  handleTextOneChange = (e) => {
    const textOne = e.target.value 

    this.setState(() => ({
      textOne
    }))

    console.log("FIELD 1", this.state.textOne)
  }

  handleTextTwoOnChange = (e) => {
    const textTwo = e.target.value

    this.setState(() => ({
      textTwo
    }))

    console.log("FIELD 2", this.state.textTwo)
  }

  render() {

    return (
      <div className='new-question-container'>
        <form>
          <h1 className='new-question-headline'>Create New Question</h1>
          <p>Complete the question:</p>
          <h2>Would you rather ...</h2>
          <div className='new-question-inputfield-container'>
            <input className='new-question-inputfield' type='text' onChange={this.handleTextOneChange}></input>
            <h2>OR</h2>
            <input className='new-question-inputfield ' type='text' onChange={this.handleTextTwoOnChange}></input>
            <button className='new-question-btn'>Create question</button>
          </div>

        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)