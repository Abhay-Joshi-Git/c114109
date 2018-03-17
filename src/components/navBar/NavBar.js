import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="left-pane full-height">
        <div className="quick-links">
          <a>
            <i className="fa fa-suitcase"></i>
            Accounts
          </a>
        </div>
        <div className="quick-links">
          <i className="fa fa-address-book-o"></i>
          Contacts
        </div>
        <div className="quick-links">
          <i className="fa fa-phone-square"></i>
          Leads
        </div>
        <div className="quick-links">
          <i className="fa fa-handshake-o"></i>
          Opportunities
        </div>
        <div className="quick-links">
          <i className="fa fa-cog"></i>
          Settings
        </div>
      </div>
    )
  }
}

export default NavBar;