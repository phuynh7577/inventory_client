import React, { Component } from 'react';
import DashNav from "../components/DashNav"

class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">
              <DashNav
                user={this.props.user}
                userInfo={this.props.userInfo}
                handleLogout={this.props.handleLogout}
              />
            </div>
          );
      }
    }

export default Dashboard;




















