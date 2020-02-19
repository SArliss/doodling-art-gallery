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
              <Link to="/drawing-page"><button>✎ Let's draw</button></Link>
              <Link to="/user"><button>🔍 My gallery</button></Link>
            </div>
          </div>
          :
          <div className="guest-landing">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/public"><li>Public Gallery</li></Link>
            </ul>

            <div className="greeting">
              <h1>Welcome to the gallery! Fell free to browse around, but you must register or login to create your art.</h1>
            </div>

            <div className="register-login-buttons">
              <Link to="/register"><button>Register</button></Link>
              <Link to="/login"><button>Login</button></Link>
            </div>
          </div>
        }
      </nav>
    </header>
  )
}

export default Header

