// Module imports
import React, { Component } from 'react';
import {
  Container, Row, Col, Image
} from 'react-bootstrap';

// Asset imports
import extras from '../assets/data/extras.js';

// Start & Export Component
export default class Extra extends Component {
  renderHelper = () => extras.map((item, i) => (
      <Col xs="4" sm="3" lg className="mb-4" key={`extra-${i}`}>
        <Image src={item} fluid />
      </Col>
  ));

  render = () => (
    <Container fluid id="extra" className="x-padding mt-5 mb-4 my-lg-0">
      <Row className="align-items-center">{this.renderHelper()}</Row>
    </Container>
  );
}
