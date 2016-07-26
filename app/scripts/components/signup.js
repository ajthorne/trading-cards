import React from 'react';
import Nav from './nav';

const Signup = React.createClass({
  submitFunction: function(evt) {
    evt.preventDefault();
    let name = this.refs.name.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let data = {
      name: name,
      username: username,
      password: password
    };
    console.log(data);
  },
  render: function () {
    return (
      <div>
        <Nav/>
        <form onSubmit={this.submitFunction}>
            <input type="text" placeholder="Enter name" ref="name"/>
            <input type="text" placeholder="Enter username" ref="username"/>
            <input type="password" placeholder="Enter password" ref="password"/>
            <input type="submit" value="Login"/>
          </form>
      </div>
    )
  }
});

export default Signup;
