import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const DashNav = (props) => {
    let dashNav = props.user ? 
        <nav>
          <Link to='/' className='Navbar-link' onClick={props.handleLogout}>LOG OUT</Link>
          {/* <Link to="/"><h1><span>Welcome Back!</span> {props.user.store_name}</h1></Link> */}
          {/* <h1>{props.user.store_name}</h1> */}
        </nav>
          :
        <Redirect push to="/"/>
       
    return(
        <div className="dashnav">
            {props.user ? 
              <Link to="/"><h1><span>Welcome Back!</span> {props.user.store_name}</h1></Link>
              : 
              ""}
            {dashNav}
        </div>
    )
}




export default DashNav;