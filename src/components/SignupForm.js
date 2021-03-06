import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import userService from '../utils/userService';


class SignupForm extends Component {

    state = {
      store_name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  
    handleChange = (e) => {
      this.props.updateMessage('');
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await userService.signup(this.state);
        // Let <App> know a user has signed up!
        this.props.handleSignupOrLogin();
        // Successfully signed up - show GamePage
        this.props.history.push('/dashboard');
      } catch (err) {
        // Invalid user data (probably duplicate email)
        this.props.updateMessage(err.message);
      }
    }
  
    isFormInvalid() {
      return !(this.state.store_name && this.state.email && this.state.password && this.state.password_confirmation && this.state.password === this.state.password_confirmation);
    }
  
    render() {
      return (
        <div>
          {this.props.user ? 
            <Redirect push to="/"/>
              :
              <div>
                <header className="signup-header">Sign Up</header>
                <form className="signup-form" onSubmit={this.handleSubmit} >
                    <input className="signup-input" type="text"  placeholder="Store Name/Address" value={this.state.store_name} name="store_name" onChange={this.handleChange} />
                    <input className="signup-input" type="email"  placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                    <input className="signup-input" type="password"  placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                    <input className="signup-input" type="password"  placeholder="Confirm Password" value={this.state.password_confirmation} name="password_confirmation" onChange={this.handleChange} />
                    <button disabled={this.isFormInvalid()}>Sign Up</button>
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
  
  export default SignupForm;
  

































