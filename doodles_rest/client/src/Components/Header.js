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
        {props.currentUser &&
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/user/doodles"><li>My Doodles</li></Link>
            <Link to="/public/doodles"><li>Public Doodles</li></Link>
            <Link to="/login" onClick={props.handleLogout}><li>Logout</li></Link>
          </ul >
        }
      </nav>

    </header>
  )
}

export default Header

