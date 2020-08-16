// Module imports
import React, { Component } from 'react';
import {
  Container, Row, Col, Nav
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
  faMediumM
} from '@fortawesome/free-brands-svg-icons';

// Asset imports
import '../assets/css/footer.css';

// Start & Export Components
export default class Footer extends Component {
  render = () => (
    <Container className="x-padding" id="footer" fluid>
      <Row>
        <Col>
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Our partners</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Contact us</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">About us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col className="text-right text-white">
          <p className="mb-0 text-white lead">Follow us</p>
          <div className="d-flex justify-content-end">
            <p className="text-white icon-social">
              <FontAwesomeIcon icon={faFacebookF} />
            </p>
            <p className="text-white icon-social">
              <FontAwesomeIcon icon={faInstagram} />
            </p>
            <p className="text-white icon-social">
              <FontAwesomeIcon icon={faTwitter} />
            </p>
            <p className="text-white icon-social">
              <FontAwesomeIcon icon={faLinkedin} />
            </p>
            <p className="text-white icon-social">
              <FontAwesomeIcon icon={faYoutube} />
            </p>
            <p className="text-white icon-social">
              <FontAwesomeIcon icon={faMediumM} />
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
