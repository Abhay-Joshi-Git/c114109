import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <div className="left-pane full-height">
    <div className="quick-links">
      <a href="#">
        <i className="fa fa-suitcase" />
        Accounts
      </a>
    </div>
    <div className="quick-links">
      <i className="fa fa-address-book-o" />
      Contacts
    </div>
    <div className="quick-links">
      <i className="fa fa-phone-square" />
      Leads
    </div>
    <div className="quick-links">
      <i className="fa fa-handshake-o" />
      Opportunities
    </div>
    <div className="quick-links">
      <i className="fa fa-cog" />
      Settings
    </div>
  </div>
);

export default NavBar;
