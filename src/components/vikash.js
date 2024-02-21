import React from 'react';
import { Link } from 'react-router-dom';

const Vikash = () => {
  return (
    <div>
      {/* <h2>Home</h2> */}
      <nav>
        <ul>
          {/* <li><Link to="/">Section </Link></li> */}
          <li><Link to="/Signin">  Signin</Link></li>
          <li><Link to="/Vedios">  Vedios</Link></li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Vikash;
