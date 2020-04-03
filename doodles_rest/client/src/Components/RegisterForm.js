import React, { Component } from 'react';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    // Same as const name = e.target.name // const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        {this.props.errorText && <p>{this.props.errorText}</p>}
        <div className="register-form">
          <form onSubmit={(e) => this.props.handleRegister(e, this.state)}>
            {this.state.errorText && <p className="error-text">{this.state.errorText}</p>}
            <h2>Register</h2>
            <label htmlFor="name">Name</label>
            <br></br>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br></br>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
