import React from 'react';
/**@jsx jsx */
import { jsx } from '@emotion/core';
import { Col } from 'react-bootstrap';

export const ChatBoxRead: React.FC = ({ children }) => {
  return (
    <Col xs={12} className="border border-warning">
      {children}
    </Col>
  );
};
