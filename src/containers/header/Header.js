import React from 'react';
import { Navbar, Nav, li, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <Navbar className="main-header-navbar">
    <Navbar.Header>
      <Navbar.Brand>
        <div className="logo" />
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <li role="presentation">
          <Link to="/" role="button">Dashboard</Link>
        </li>
        <NavDropdown eventKey={2} title="Customers" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}><Link to="/accounts">Accounts</Link></MenuItem>
          <MenuItem eventKey={2.2}><Link to="/contacts">Contacts</Link></MenuItem>
          <MenuItem eventKey={2.3}><Link to="/magento-customers">Magento Customers</Link></MenuItem>
          <MenuItem eventKey={2.4}><Link to="/business-customers">Business Customers</Link></MenuItem>
        </NavDropdown>
        <li role="presentation">
          <Link to="/sales" role="button">Sales</Link>
        </li>
        <li role="presentation">
          <Link to="/activities" role="button">Activities</Link>
        </li>
        <li role="presentation">
          <Link to="/marketing" role="button">Marketing</Link>
        </li>
        <li role="presentation">
          <Link to="/reports" role="button">Reports</Link>
        </li>
        <li role="presentation">
          <Link to="/systems" role="button">Systems</Link>
        </li>
      </Nav>
      <Nav pullRight>
        <li role="presentation">
          <div className="create-icon" />
        </li>
        <li role="presentation">
          <i className="fa fa-search icon-btn" role="button" />
        </li>
        <li role="presentation">
          <i className="fa fa-bell icon-btn" role="button" />
        </li>
        <li role="presentation">
          <div className="user icon-btn" role="button">John Deo <i className="fa fa-angle-down" /></div>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
