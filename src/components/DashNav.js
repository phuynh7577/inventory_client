import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const DashNav = (props) => {
    let dashNav = props.user ? 
        <nav>
          <Link to='/' className='Navbar-link' onClick={props.handleLogout}>LOG OUT</Link>
          {/* <h1>{props.user.store_name}</h1> */}
        </nav>
          :
        <Redirect push to="/"/>
       
    return(
        <div className="dashnav">
            <Link to="/"><h1>LIQUOR-IQ</h1></Link>
            {dashNav}
        </div>
    )
}




export default DashNav;