import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';

// custom components 
import { registerUser, loginUser, verifyUser } from './Services/Api-helper';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';

import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import PublicDoodles from './Components/PublicDoodles.js';
import PersonalDoodles from './Components/PersonalDoodles.js';
import DrawArea from './Components/DrawArea';
import UpdateDoodle from './Components/UpdateDoodle';
import DoodleDetail from './Components/DoodleDetail';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: ""
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push('/user');
    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push("/user");
    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
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
          handleLogin={this.handleLogin}
          loggedIn={this.state.currentUser}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />

        <Route exact path="/" render={() => (
          <div className="main-page-image">
            <img src="https://cdn.pixabay.com/photo/2016/03/31/15/05/cat-1292989_1280.png" alt="cat drawing"></img>
          </div>
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

        <Route exact path="/public" render={() => (
          <PublicDoodles />
        )} />

        <Route exact path="/user" render={() => (
          <PersonalDoodles />
        )} />

        <Route path="/drawing-page" render={() => (
          <DrawArea />
        )} />

        <Route path="/doodles/detail/:category/:id" component={DoodleDetail} />
        <Route path="/doodles/update/:category/:id" component={UpdateDoodle} />

        <Footer />

      </div>
    );
  }
}

export default withRouter(App);