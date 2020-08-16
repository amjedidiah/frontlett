// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

// Asset imports
import '../assets/css/title.css';

// Start & Export Component
export default class Title extends Component {
  static propTypes = {
    title: PropTypes.string,
    headerTitle: PropTypes.string,
    rowReversed: PropTypes.bool
  };

  render = () => (
    <Container fluid id="title" className="my-4">
      <Row className="align-items-center px-0">
        <Col
          lg={{ order: this.props.rowReversed ? 'last' : 'first', span: 4 }}
          className={`x-padding px-0 ${this.props.rowReversed ? 'text-right' : ''}`}
        >
          <h3 className="title">{this.props.title}</h3>
        </Col>
        <Col
          lg={{ order: this.props.rowReversed ? 'first' : 'last' }}
          className={`px-0 d-flex ${this.props.rowReversed ? 'justify-content-start' : 'justify-content-end'}`}
        >
          <h1 className="header-title">{this.props.headerTitle}</h1>
        </Col>
      </Row>
    </Container>
  );
}
