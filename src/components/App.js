import React, { Component, Fragment } from 'react'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from './Nav'
import NavWithAvatar from './NavWithAvatar';
import Login from './LogIn'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {

    const { authedUser } = this.props

    return (
      <Router>
        <Fragment>
          <div className='container'>
            {authedUser === null
              ? <Nav /> 
              : <NavWithAvatar />

            }

            {authedUser === null
              ? <Login />
              : <Routes>
                <Route path='/' exact element={<Home />} activeClassName='active' />
                <Route path='/leaderboard' element={<LeaderBoard />} activeClassName='active' />
                <Route path='/add' element={<NewQuestion />} activeClassName='active' />
              </Routes>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
