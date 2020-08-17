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
      <Col xs="4" className="d-lg-flex flex-grow-1 mb-4 align-items-center" key={`feature-${i}`}>
        <Image className="ml-auto mr-auto mr-lg-4 ml-lg-0 d-block" src={icon} fluid /> <p className="text-capitalize text-center text-lg-left">{name}</p>
      </Col>
  ));

  render = () => (
    <Container fluid className="x-padding">
      <Row className="align-items-center">{this.renderHelp()}</Row>
    </Container>
  );
}
