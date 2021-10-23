import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './LogIn'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className='container'>
        <Nav />
        <Login />
      </div>
    )
  }
}


export default connect()(App);
