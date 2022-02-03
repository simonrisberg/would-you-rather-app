import React, { Component, Fragment } from 'react'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from './Nav'
import NavWithAvatar from './NavWithAvatar';
import Login from './LogIn'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion';
import PollDetails from './PollDetails';

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
              : <div>
                <Route path='/' exact component={Home}/>
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/question/:id' component={PollDetails} />
                <Route path='/add' component={NewQuestion}/>
              </div>}
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
