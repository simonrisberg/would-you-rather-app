import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>Home</li>
          <li>New Question</li>
          <li>Leaderboard</li>
        </ul>
      </nav>
    )
  }
}

export default Nav