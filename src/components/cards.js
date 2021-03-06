// Module imports
import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// Asset imports
import benefits from '../assets/data/benefits.json';
import '../assets/css/cards.css';

// Start & Export Component
export default class Cards extends Component {
  // renderHelp = () => benefits.map(({ title, body }, i) => (
  //       <div key={`cards-${i}`}>
  //         <Card.Body>
  //           <Card.Title>{title}</Card.Title>
  //           <Card.Text>{body}</Card.Text>
  //         </Card.Body>
  //       </div>
  // ));

  renderHelp = () => benefits.map(({ title, body }, i) => (
      <div
        className={`grid-item shadow p-4 mb-3 ${![1, 3].includes(i) ? 'bg-primary' : 'bg-white grid-item-white'} ${
          i === 4 ? 'grid-item--width2' : ''
        }`}
        key={`cards-${i}`}
      >
        <h4 className="title">{title}</h4>
        <p>{body}</p>
      </div>
  ));

  render = () => (
    <Container fluid className="x-padding" id="cards">
      <Row>
        <Col xs>
          <div className="grid">
            <div className="grid-sizer"></div>
            <div className="gutter-sizer"></div>
            {this.renderHelp()}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
