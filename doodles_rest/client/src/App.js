import React from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';

// custom components 
import { registerUser, loginUser, verifyUser } from './Services/Api-helper';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
// import TodoContainer from './Components/TodoContainer';

import DrawArea from './Components/DrawArea.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: false,
      errorText: ""
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push('/user/doodles');
    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push("/user/doodles");
    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: false
    })
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
  }

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem('authToken')) {
      const id = parseInt(localStorage.getItem('id'));
      const username = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      const user = { username, email, id };
      user && this.setState({
        currentUser: user
      })
    }
  }


  render() {
    return (
      <div className="App">

        <Header
         loggedIn={this.state.currentUser}
         handleLogout={this.handleLogout}
         currentUser={this.state.currentUser}
        />

        {this.state.currentUser ?
          <div>
            <h1>Hello, {this.state.currentUser.name}</h1>
            <button onClick={this.handleLogout}>Logout!</button>
          </div>
          :
          <nav>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Login</button></Link>
          </nav>
        }

        <Route exact path="/" render={() => (
          // <TodoContainer /> 
          <div></div>
        )} />

        <Route path="/login" render={() => (
          <LoginForm
            handleLogin={this.handleLogin}
            errorText={this.state.errorText}
            currentUser={this.state.currentUser}
          />
        )} />
        <Route path="/register" render={() => (
          <RegisterForm
            handleRegister={this.handleRegister}
            errorText={this.state.errorText}
            currentUser={this.state.currentUser}
          />
        )} />
        <Route path="/user/doodles" render={() => (
          // <TodoContainer /> 
          <div></div>
        )} />

        {/* <DrawArea /> */}

        <Footer />

      </div>
    );
  }
}

export default withRouter(App);