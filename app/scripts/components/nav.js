import React from 'react';

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <a href="#login">Login</a> |
        <a href="#signup"> Sign Up</a> |
        <a href="#addcard"> Create New Card</a> |
        <a href="#/"> Home</a>
      </nav>
    )
  }
});

export default Nav;
