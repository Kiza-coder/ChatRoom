import React from 'react';
/**@jsx jsx */
import { jsx } from '@emotion/core';
import { PageTitle } from './PageTitle';
import { Row, Col, Container } from 'react-bootstrap';

interface Props {
  title?: string;
}

export const Page: React.FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          {title && <PageTitle>{title}</PageTitle>}
        </Col>
      </Row>
      <Row>{children}</Row>
    </Container>
  );
};

export default Page;
