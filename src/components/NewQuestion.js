import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom'

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
  }

  handleTextTwoOnChange = (e) => {
    const textTwo = e.target.value

    this.setState(() => ({
      textTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {textOne, textTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(textOne, textTwo))

    this.setState(() => ({
      textOne: '',
      textTwo: '',
      toHome: true
    }))
  }

  render() {

    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='new-question-container'>
        <form onSubmit={this.handleSubmit}>
          <h1 className='new-question-headline'>Create New Question</h1>
          <p>Complete the question:</p>
          <h2>Would you rather ...</h2>
          <div className='new-question-inputfield-container'>
            <input className='new-question-inputfield' type='text' onChange={this.handleTextOneChange}></input>
            <h2>OR</h2>
            <input className='new-question-inputfield ' type='text' onChange={this.handleTextTwoOnChange}></input>
            <button className='new-question-btn' type='submit'>Create question</button>
          </div>

        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)