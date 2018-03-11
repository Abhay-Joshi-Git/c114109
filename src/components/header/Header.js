import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="logo"></div>
        <div class="top-nav">
          <ul>
          <li class="selected">Dashboard <i class="fa fa-angle-down"></i></li>
          <li>Customer <i class="fa fa-angle-down"></i>
            <ul>
              <li>Accounts</li>
              <li>Contacts </li>
              <li>Magento Customers</li>
              <li>Business Customers</li>
            </ul>
          </li>
          <li>Sales <i class="fa fa-angle-down"></i></li>
          <li>Activities <i class="fa fa-angle-down"></i></li>
          <li>Marketing <i class="fa fa-angle-down"></i></li>
          <li>Reports <i class="fa fa-angle-down"></i> </li>
          <li>Systems <i class="fa fa-angle-down"></i></li>
          </ul>
        </div>
        <div class="right-icons">
          <div class="create-icon"></div>
          <i class="fa fa-search"></i>
          <i class="fa fa-bell"></i>
          <span>John Deo <i class="fa fa-angle-down"></i></span>
        </div>
      </header>
    );
  }
}

export default Header;
