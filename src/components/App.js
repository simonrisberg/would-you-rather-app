import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './LogIn'
import Home from './Home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {

    const { authedUser } = this.props

    console.log("AUTHEDUSER", authedUser)

    return (
      <div className='container'>
        <Nav />
        {authedUser === null ? <Login /> : <Home />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
