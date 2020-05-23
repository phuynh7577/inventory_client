import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import userService from '../utils/userService';

class Login extends Component {
  
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/dashboard');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div>
        {this.props.user ? 
          <Redirect push to="/"/>
            :
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
        }
      </div>
    );
  }
}

export default Login;