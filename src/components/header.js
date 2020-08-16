// Module imports
import React, { Component } from 'react';
import {
  Navbar, Nav, Button, Container, Image
} from 'react-bootstrap';

// Asset imports
import logo from '../assets/img/logo.png';
import navLinks from '../assets/data/navLinks.json';

// Start & Emport Component
export default class Header extends Component {
  removeDashes = (item) => item.split('-').join(' ')

  renderNavLinks = () => navLinks.map((item, i) => (
      <Nav.Link href={`#${item}`} className="text-capitalize text-dark" key={`nav-links-${i}`}>
        {this.removeDashes(item)}
      </Nav.Link>
  ));

  render = () => (
    <Navbar bg="white" expand="md" id="header" className="x-padding">
      <Container fluid className="p-0">
        <Navbar.Brand href="#home" className="p-0">
          <Image
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="Frontlett Logo"
            fluid
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {this.renderNavLinks()}
          </Nav>
          <Button variant="primary" size="lg">
            <span className="text-white">Try virtualting</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
