import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        {this.props.currentUser ?
          <div className="logged-in">
            <h1>Hello! You are already logged-in. Please acess <a href="/user/doodles">your gallery.</a></h1>
          </div>
          :
          <div className="login-form">
            <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
              <h2>Login</h2>
              {this.state.errorText && <p className="error-text">{this.state.errorText}</p>}
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="email"
              />
              <br></br>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="password"
              />
              <br></br>
              <button>Submit</button>
              <br></br>
              <br></br>
              <Link to="/register">Register</Link>
            </form>
          </div>
        }
      </div>
    )
  }
}
