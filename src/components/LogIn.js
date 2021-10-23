import React, { Component } from "react";
import { connect } from 'react-redux' 

class LogIn extends Component {


  render() {
    const { users } = this.props

    return (
      <div className='login-container'>
        <div className='login-headline'>
          <span className='login-text'>Welcome to the Would You Rather App!</span>
          <span className='login-smalltext'>Please sign in to continue</span>
          <span className='sign-in'>Sign in</span>
          <select className='sign-in-picker' id="users">
            {users.map((user) => (
              <option key={user} value={user}>{user}</option>
            ))}
          </select>
          <button className='sign-in-btn'>Sign in</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.keys(users)
  }
}

export default connect(mapStateToProps)(LogIn)