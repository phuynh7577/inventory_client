import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import {Link} from 'react-router-dom'

class Signup extends Component {
    state = {
        message: ''
    }
    
  
    updateMessage = (msg) => {
      this.setState({message: msg});
    }
  
    render() {
      return (
        <div className='signup'>
          <div className="title">
              <Link to="/"><h1>LIQUOR-IQ</h1></Link>
          </div>
          <SignupForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
      );
    }
  }
  
  export default Signup;