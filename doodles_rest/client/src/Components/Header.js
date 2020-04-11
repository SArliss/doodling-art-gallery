import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>

      <div className="title">
        <Link to="/">
          <h1>Doodling Art Gallery</h1>
        </Link>
      </div>

      <nav>
        {props.currentUser ?
          <div className="user-landing">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/public"><li>Public Gallery</li></Link>
              <Link to="/login" onClick={props.handleLogout}><li>Logout</li></Link>
            </ul >

            <div className="greeting">
              <h1>Hello, {localStorage.getItem('name')}!</h1>
            </div>

            <div className="personal-doodle-buttons-wrapper">
              <Link to="/drawing-page"><button> Let's draw</button></Link>
              <Link to="/user"><button> My gallery</button></Link>
            </div>
          </div>
          :
          <div className="guest-landing">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/public"><li>Public Gallery</li></Link>
            </ul>

            <div className="greeting-landing">
              <p>Welcome to the Doodling Art Gallery!
              <br></br>
                 At this moment, the drawing area is only compatible with mouse and touchpads events.
              <br></br>
                 Drawing with touchscreen is a feature under development for our mobile app. 
               </p>
            </div>

            <div className="register-login-buttons">
              <Link to="/register"><button>Register</button></Link>
              <Link to="/login"><button>Login</button></Link>
              <button id="guest-button" onClick={(e) => props.handleLogin(e, {email: "guest", password: "guest"})}>Guest</button>
            </div>
          </div>
        }
      </nav>
    </header>
  )
}

export default Header

