import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class NavWithAvatar extends Component {

  handleOnClick = () => {
    this.props.dispatch(setAuthedUser(null))
  }
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
            <button className="logout-button" onClick={this.handleOnClick}>Log out</button>
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