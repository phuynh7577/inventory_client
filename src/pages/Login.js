import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../utils/userService';

class Login extends Component {
  
  state = {
    email: '',
    password: ''
  };

  // handle the input of pw and email
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // handle submiting
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up 
      this.props.history.push('/dashboard');
    } catch (err) {
      // this.props.history.push('/login')
      // need to add model or toast to let user know invalid credentials
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div>

          <div className="login-page">
            <div className="title">
              <Link to="/"><h1>LIQUOR-IQ</h1></Link>
            </div>
          <header className="login-header">Log In</header>
          <form className="login-form" onSubmit={this.handleSubmit} >
                <input type="email" className="login-input" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                <input type="password" className="login-input" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                <button>Log In</button>
                <div className="return">
                  <Link to='/'>Return</Link>
                </div>
          </form>
        </div>
        
      </div>
    )
  }
}

export default Login;