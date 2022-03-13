import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class NavWithAvatar extends Component {
  render() {

    const { loggedInUser } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact="true">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <img src={loggedInUser.avatarURL} alt={"Avatar"} className='nav-avatar'></img>
          </li>
          <li>
            <h2>{loggedInUser.name}</h2>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({users, authedUser }) {

  return {
    loggedInUser: users[authedUser]
  }

}

export default connect(mapStateToProps)(NavWithAvatar)