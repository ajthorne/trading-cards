import React from 'react';
import Nav from './nav';

const Login = React.createClass({
  submitFunction: function(evt) {
    evt.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let data = {
      username: username,
      password: password
    };
    console.log(data);
  },
  render: function () {
    return (
      <div>
        <Nav/>
        <form className="login-form" onSubmit={this.submitFunction}>
            <h2>Login</h2>
            <input className="login-input" type="text" placeholder="Enter username" ref="username"/>
            <input className="login-input" type="password" placeholder="Enter password" ref="password"/>
            <input className="login-submit" type="submit" value="Login"/>
          </form>
      </div>
    )
  }
});

export default Login;
