import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const DashNav = (props) => {
    let dashNav = props.user ? 
        <nav>
          <h1>{props.userInfo.store_name}</h1>
          <Link to='/' className='Navbar-link' onClick={props.handleLogout}>LOG OUT</Link>
        </nav>
          :
        <Redirect push to="/"/>
       
    return(
        <div className="dashboard-nav">
            {dashNav}
        </div>
    )
}




export default DashNav;