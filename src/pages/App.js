import React from 'react';
import '../index';
import {Route, Link} from 'react-router-dom'
import userService from "../utils/userService"
import Login from "./Login"
import Signup from "./Signup"
import Navbar from "../components/Navbar"
import Dashboard from "./Dashboard"
import infoService from "../utils/infoService"

class App extends React.Component {
  state ={
    user: userService.getUser(),
    userInfo: ""
  }


                                  // **********CALLBACK METHODS***********
  handleLogout = () => {
    userService.logout()
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

                              // *************LIFECYCLE METHODS*****************
  async componentDidMount() {
    const userInfo = await infoService.index();
    this.setState({ userInfo });
  }


  render() {
    console.log(this.state.userInfo)
    return(
      <div className="app">

            <Route exact path="/" render={() =>  
              <Navbar
                user={this.state.user}
                handleLogout={this.handleLogout} 
              />
            }/>

            <Route exact path="/dashboard" render={() => 
              <Dashboard
                userInfo={this.state.userInfo}
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
