import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <Navbar className="main-header-navbar">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/" className="logo" />
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav className="left-nav">
        <NavItem href="/">
          Dashboard
        </NavItem>
        <NavDropdown title="Customers" id="nav-dropdown-customers">
          <MenuItem href="/accounts">Accounts</MenuItem>
          <MenuItem href="/contacts">Contacts</MenuItem>
          <MenuItem href="/magento-customers">Magento Customers</MenuItem>
          <MenuItem href="/business-customers">Business Customers</MenuItem>
        </NavDropdown>
        <NavDropdown title="Sales" id="nav-dropdown-sales">
          <MenuItem href="/leads">Leads</MenuItem>
          <MenuItem href="/opportunities">Opportunities</MenuItem>
        </NavDropdown>
        <NavItem href="/activities">Activities</NavItem>
        <NavItem href="/marketing">Marketing</NavItem>
        <NavItem href="/reports">Reports</NavItem>
        <NavItem href="/systems">Systems</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <div className="create-icon" />
        </NavItem>
        <NavItem role="presentation">
          <i className="fa fa-search icon-btn" role="button" />
        </NavItem>
        <NavItem role="presentation">
          <i className="fa fa-bell icon-btn" role="button" />
        </NavItem>
        <NavItem role="presentation">
          <div className="user icon-btn" role="button">
            <span className="user-name">John Deo</span>
            <i className="fa fa-angle-down" />
          </div>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
