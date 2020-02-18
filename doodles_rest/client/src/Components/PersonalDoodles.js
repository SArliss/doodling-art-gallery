import React from 'react';
import { Link } from 'react-router-dom';
import DrawArea from './DrawArea.js';


function PersonalDoodles() {
  return (
    <div className="personal-doodle-buttons-wrapper">
      <Link to="drawing"><button>✎ Let's draw</button></Link>
      <Link to="gallery"><button>🔍 My gallery</button></Link>
    </div>
  )
}

export default PersonalDoodles

