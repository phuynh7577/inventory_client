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
    userInfo: []
  }

  handleUpdate = (event, inventory) => {
    console.log(inventory)
    event.preventDefault()
    console.log('in it to win it')
    fetch(`https://liquor-iq-api.herokuapp.com/users/${userService.getUser().id}/inventories/${inventory.id}`, {
      body: JSON.stringify(inventory),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedLiquor => {
      this.componentDidMount()
    })
    .catch(error => console.log(error))
  }



  // handle inventory submit
  handleAddRequest = (userInfo) => {
    const copyUserInfo = [...this.state.userInfo]
    copyUserInfo.unshift(userInfo)
    this.setState({
        userInfo: copyUserInfo,
    })
  }


  componentDidMount() {
    this.getUserInfo()
  }


  getinfo = userInfo => {
    this.setState({userInfo})
    this.componentDidMount()
  }


  // Get request
  getUserInfo = () => {
    if (userService.getUser()) {
      fetch(`https://liquor-iq-api.herokuapp.com/users/${userService.getUser().id}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + tokenService.getToken()
        }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            userInfo: data.inventories
        })
      })
      .catch(err => console.log(err))
    }
    else {
      return <Redirect push to="/"/>
    }
  }

  // delete/destroy

  handleDelete = (inventory) => {
      fetch(`https://liquor-iq-api.herokuapp.com/users/${userService.getUser().id}/inventories/${inventory.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
    .then(json => {
      // filter by id
      const newUserInfo = this.state.userInfo.filter(inventories => inventories.id !== inventory.id)
      this.setState({newUserInfo})
      this.componentDidMount()
    })
    .catch(error => 
      console.log(error)
      )
  }

    render() {
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
                    <Link to="/dashboard" className="one">
                        <div className="inside-one">
                          <img src="../overview.png" width="40px" alt="overview"/>
                          <h4>OVERVIEW</h4>
                        </div>
                      </Link>
                      
                      <Link to="/dashboard/form-input" className="two">
                        <div className="inside-two">
                        <img src="../add.webp" width="50px" alt="overview"/>
                        <h4>ADD INVENTORY</h4>
                        </div>
                      </Link>
                      
                      <Link to="/dashboard/view-edit" className="three">
                        <div className="inside-three">
                          <img src="../edit.png" width="40px" alt="overview"/>
                          <h4>VIEW/DELETE<br/>INVENTORY</h4>
                        </div>
                      </Link>
                    </aside>
                  </div>



                <div className="right">
                  <Route exact  path="/dashboard" render= {props => 
                      <Overview 
                        {...props}
                        user={this.props.user}
                        userInfo={this.state.userInfo}
                        />}
                    />

                  <Route exact path="/dashboard/form-input" render= {props => 
                      <InventoryForm 
                        {...props}
                        user={this.props.user}
                        userInfo={this.state.userInfo}
                        handleAddRequest={this.handleAddRequest}
                        />}
                    />


                  <Route exact  path="/dashboard/view-edit" render= {props => 
                      <EditInventory
                        {...props}
                        user={this.props.user}
                        userInfo={this.state.userInfo}
                        handleDelete={this.handleDelete}
                        componentDidMount={this.componentDidMount}
                        handleUpdate={this.handleUpdate}
                        />}
                    />
                </div>
              </div>
              }
            </div>
          );
      }
    }

export default Dashboard;




















