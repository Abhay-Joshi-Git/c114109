import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo"></div>
        <div className="top-nav">
          <ul>
          <li className="selected">Dashboard <i className="fa fa-angle-down"></i></li>
          <li>Customer <i className="fa fa-angle-down"></i>
            <ul>
              <li>Accounts</li>
              <li>Contacts </li>
              <li>Magento Customers</li>
              <li>Business Customers</li>
            </ul>
          </li>
          <li>Sales <i className="fa fa-angle-down"></i></li>
          <li>Activities <i className="fa fa-angle-down"></i></li>
          <li>Marketing <i className="fa fa-angle-down"></i></li>
          <li>Reports <i className="fa fa-angle-down"></i> </li>
          <li>Systems <i className="fa fa-angle-down"></i></li>
          </ul>
        </div>
        <div className="right-icons">
          <div className="create-icon"></div>
          <i className="fa fa-search"></i>
          <i className="fa fa-bell"></i>
          <span>John Deo <i className="fa fa-angle-down"></i></span>
        </div>
      </header>
    );
  }
}

export default Header;
