import React, { Component } from 'react';
import '../index';
import {Route} from 'react-router-dom'
import userService from "../utils/userService"
import Login from "./Login"
import Signup from "./Signup"
import Navbar from "../components/Navbar"
import Dashboard from "./Dashboard"


class App extends Component {
  state ={
    user: userService.getUser(),
    // userInfo: [],
  }


                                  // **********CALLBACK METHODS***********
  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
                              // *************LIFECYCLE METHODS*****************
 


  render() {
    // console.log(this.state.user)
    return(
      <div className="app">
            <Route exact path="/" render={() =>  
              <Navbar
                user={this.state.user}
                handleLogout={this.handleLogout} 
              />
            }/>

            <Route path="/dashboard" render={(props) => 
              <Dashboard
                handleAdd={this.handleAdd}
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            }/>

            <Route exact path="/signup" render={({history}) =>
              <Signup
                user={this.state.user}
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              /> 
            }/>

            <Route exact path='/login' render={({history}) =>
              <Login
                user={this.state.user}
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              /> 
            }/>
      </div>
    )
  }
}

export default App;
