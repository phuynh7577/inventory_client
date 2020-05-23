import React, { Component } from 'react';
import DashNav from "../components/DashNav"
import InventoryForm from "../components/InventoryForm"
import {Route, Link, Redirect} from 'react-router-dom'  
import userService from "../utils/userService"
import tokenService from "../utils/tokenService"



import Overview from "../components/Overview"
import EditInventory from "../components/EditInventory"

class Dashboard extends Component {

  state = {
    userInfo: ""
  }

  componentDidMount() {
    this.getUserInfo()
  }

  getUserInfo = () => {
    fetch(`http://localhost:3000/users/${userService.getUser().id}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
    })
        .then(res => res.json())
        .then(data => {
          this.setState({
              userInfo: data
          })
      })
        .catch(err => console.log(err))
  }


    render() {
      console.log(this.state.userInfo)
        return (
            <div>
              <DashNav
                user={this.props.user}
                handleLogout={this.props.handleLogout}
              />
              {!this.props.user ? 
                <Redirect push to="/"/>
                :
                <div className="dashboard">
                  <div className="left">
                    <aside>
                    <Link to="/dashboard/overview" className="one">
                        <div className="inside-one">
                          <img src="../overview.png" width="40px" alt="overview image"/>
                          <h4>OVERVIEW</h4>
                        </div>
                      </Link>
                      
                      <Link to="/dashboard/form-input" className="two">
                        <div className="inside-two">
                        <img src="../add.webp" width="50px" alt="overview image"/>
                        <h4>ADD INVENTORY</h4>
                        </div>
                      </Link>
                      
                      <Link to="/dashboard/view-edit" className="three">
                        <div className="inside-three">
                          <img src="../edit.png" width="40px" alt="overview image"/>
                          <h4>VIEW/EDIT<br/>INVENTORY</h4>
                        </div>
                      </Link>
                    </aside>
                  </div>



                <div className="right">
                  <Route exact  path="/dashboard/overview" render= {props => 
                      <Overview 
                        {...props}
                        user={this.props.user}
                        userInfo={this.state.userInfo}/>}
                    />

                  <Route exact path="/dashboard/form-input" render= {props => 
                      <InventoryForm 
                        {...props}
                        user={this.props.user}
                        userInfo={this.state.userInfo}/>}
                    />

                  <Route exact  path="/dashboard/view-edit" render= {props => 
                      <EditInventory
                        {...props}
                        user={this.props.user}
                        userInfo={this.state.userInfo}/>}
                    />
                </div>
              </div>
              }
            </div>
          );
      }
    }

export default Dashboard;




















