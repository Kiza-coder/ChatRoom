import React from 'react';
/**@jsx jsx */
import { jsx } from '@emotion/core';
import { Container, Jumbotron, Col, Row } from 'react-bootstrap';

export const Header: React.FC = () => {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col className="text-center">The Chat</Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Header;
