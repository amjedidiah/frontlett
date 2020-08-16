// Module imports
import React, { Component } from 'react';
import {
  Jumbotron, Container, Row, Col, Image, Button
} from 'react-bootstrap';

// Asset imports
import jumbo from '../assets/img/jumbo.png';
import '../assets/css/jumbo.css';

// Start & Export Component
export default class Jumbo extends Component {
  render = () => (
    <Jumbotron fluid className="py-0 bg-white" id="jumbo">
      <Container fluid>
        <Row>
          <Col id="notImage">
            <div id="border" className="d-none d-lg-block"></div>
            <div id="float">
              <h1 className="title">
                Looking to penetrate the market with little cost to pay for employee resources?{' '}
              </h1>
              <p>
                Virtualting® is a collaborative-based, shared service platform that connects those
                who are highly skilled with those who need the services of a skilled workforce for a
                quarter of the price
              </p>
              <Button>
                <span>Get started</span>
              </Button>
            </div>
          </Col>
          <Col md="7" className="px-0 d-none d-lg-flex">
            <Image src={jumbo} className="mw-100" fluid />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
// End Component
