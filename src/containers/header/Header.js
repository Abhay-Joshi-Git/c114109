import React from 'react';
import './header.css';

const Header = () => (
  <header>
    <div className="logo" />
    <div className="top-nav">
      <ul>
        <li className="selected">Dashboard <i className="fa fa-angle-down" /></li>
        <li>Customer <i className="fa fa-angle-down" />
          <ul>
            <li>Accounts</li>
            <li>Contacts </li>
            <li>Magento Customers</li>
            <li>Business Customers</li>
          </ul>
        </li>
        <li>Sales <i className="fa fa-angle-down" /></li>
        <li>Activities <i className="fa fa-angle-down" /></li>
        <li>Marketing <i className="fa fa-angle-down" /></li>
        <li>Reports <i className="fa fa-angle-down" /> </li>
        <li>Systems <i className="fa fa-angle-down" /></li>
      </ul>
    </div>
    <div className="right-icons">
      <div className="create-icon" />
      <i className="fa fa-search" />
      <i className="fa fa-bell" />
      <span>John Deo <i className="fa fa-angle-down" /></span>
    </div>
  </header>
);

export default Header;
