// Module imports
import React, { Component } from 'react';
import {
  Container, Row, Col, Image
} from 'react-bootstrap';

// Asset imports
import features from '../assets/data/features.js';

// Start & Export Components
export default class Features extends Component {
  renderHelp = () => features.map(({ name, icon }, i) => (
      <Col xs="12" sm="6" lg="4" className="d-flex flex-grow-1 mb-4 align-items-center" key={`feature-${i}`}>
        <Image className="mr-4" src={icon} /> <p className="text-capitalize">{name}</p>
      </Col>
  ));

  render = () => (
    <Container fluid className="x-padding">
      <Row className="align-items-center">{this.renderHelp()}</Row>
    </Container>
  );
}
