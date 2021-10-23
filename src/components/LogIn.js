import React, { Component } from "react";
import { connect } from 'react-redux' 

class LogIn extends Component {


  render() {
    const { users } = this.props

    const userslist = Object.entries(users)

    console.log('users', userslist)

    return (
      <div className='login-container'>
        <div className='login-headline'>
          <span className='login-text'>Welcome to the Would You Rather App!</span>
          <span className='login-smalltext'>Please sign in to continue</span>
          <span className='sign-in'>Sign in</span>
          <select className='sign-in-picker' id="users">
            <option value="test1">test1</option>
            <option value="test2">test2</option>
          </select>
          <button className='sign-in-btn'>Sign in</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(LogIn)