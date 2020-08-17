// Module imports
import React, { Component } from 'react';
import {
  Jumbotron, Container, Row, Col, Image, Button, Carousel
} from 'react-bootstrap';

// Asset imports
import jumbo from '../assets/img/jumbo.png';
import '../assets/css/jumbo.css';

// Start & Export Component
export default class Jumbo extends Component {
  renderCarouselItems = () => [0, 1, 2].map((item, i) => <Carousel.Item key={`carousel-item-${i}`}>
    <Image src={jumbo} className="d-block w-100" alt={`Slide-${i}`} fluid />
  </Carousel.Item>)

  render = () => (
    <Jumbotron fluid className="py-0 bg-white" id="jumbo">
      <Container fluid>
        <Row>
          <Col id="notImage" className="pr-lg-5 py-lg-4 pl-0">
            <div id="border" className="d-none d-lg-block border border-primary"></div>
            <div id="float" className="rounded x-padding border border-white">
              <h1>
                Looking to penetrate the market with little cost to pay for employee resources?{' '}
              </h1>
              <p className="lead my-4">
                Virtualting® is a collaborative-based, shared service platform that connects those
                who are highly skilled with those who need the services of a skilled workforce for a
                quarter of the price
              </p>
              <Button variant="primary mb-5" size="lg">
                <span className="text-white">Get started</span>
              </Button>
            </div>
          </Col>
          <Col md="7" className="px-0 d-flex">
            <Carousel>
              {this.renderCarouselItems()}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
// End Component
