import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

class Navigation extends Component {
  render(){
      return (
      <Navbar className="navbar navbar-inverse navbar-fixed-top">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">UNAFB</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav className="nav navbar-nav">
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      </Navbar>);
  }
}

export default Navigation;
