import React, { Component } from "react";
import { connect } from 'react-redux' 
import { setAuthedUser } from "../actions/authedUser";

class LogIn extends Component {

  state = {
    selectedUserId: ''
  }

  handleChange = (userId) => {

    console.log("SELECTED USER", userId)

    this.setState(() => ({
      selectedUserId: userId
    }))

  }

  handleSubmit = (e) => {
    
    e.preventDefault()

    const { selectedUserId } = this.state

    console.log("SELECTED", selectedUserId)
    
    this.props.dispatch(setAuthedUser(selectedUserId))

  }


  render() {
    const { users } = this.props

    console.log("USERS", users)

    return (
      <div className='login-container'>
        <form className='login-headline' onSubmit={this.handleSubmit}>
          <span className='login-text'>Welcome to the Would You Rather App!</span>
          <span className='login-smalltext'>Please sign in to continue</span>
          <span className='sign-in'>Sign in</span>
          <select className='sign-in-picker' id="users" onChange={(e) => this.handleChange(e.target.value)}>
            <option>Choose User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <button className='sign-in-btn' type='submit'>Sign in</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(LogIn)