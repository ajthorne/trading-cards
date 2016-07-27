import React from 'react';

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <img className="catlogo" src="http://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png"/>
        <a className="link" href="#addcard">Create New Card</a>
        <a className="link" href="#login">Login</a>
        <a className="link" href="#signup">Sign Up</a>
        <a className="link" href="#/">Home</a>
      </nav>
    )
  }
});

export default Nav;
