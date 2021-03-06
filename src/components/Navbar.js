import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/' className='Navbar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/dashboard" className='Navbar-link'>BACK TO DASHBOARD</Link>
    </div>
    :
    <div>
      <Link to='/login' className='Navbar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='Navbar-link'>SIGN UP</Link>
    </div>

  return (
    <div className='navbar'>
      <div className="title">
          <Link to="/"><h1>LIQUOR-IQ</h1></Link>
      </div>
      
      {nav}
    </div>
  );
};

export default Navbar;