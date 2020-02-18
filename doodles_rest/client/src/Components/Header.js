import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>

      <header>
      <Link to="/">
        <h1>Doodling Art Gallery</h1>
      </Link>
      </header>

      <div className="menu">
        {props.currentUser &&
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/explore"><li>My Doodles</li></Link>
            <Link to="/myprofile"><li>Public Doodles</li></Link>
            <Link to="/login" onClick={props.handleLogout}><li>Logout</li></Link>
          </ul >
        }
      </div>

    </div>
  )
}

export default Header

