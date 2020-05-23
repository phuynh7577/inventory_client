import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom'  

class Overview extends Component {

    render() {
        console.log(this.props.userInfo)
        return (
            <div className="overview">
              {this.props.userInfo === "" ? <Redirect push to="/dashboard"/> : "hello" }
              

            </div>
          );
      }
    }

export default Overview;