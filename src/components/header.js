// Module imports
import React, { Component } from 'react';
import {
  Navbar, Nav, Button, Container, Image
} from 'react-bootstrap';

// Asset imports
import logo from '../assets/img/logo.png';
import '../assets/css/header.css';

// Start & Emport Component
export default class Header extends Component {
  render = () => (
    <Navbar bg="white" expand="lg" id="header" className="x-padding">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={logo} className="d-inline-block align-top" alt="Frontlett Logo" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#howitworks">How It Works</Nav.Link>
          </Nav>
          <Button variant="primary" size="lg"><span>Try virtualting</span></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
