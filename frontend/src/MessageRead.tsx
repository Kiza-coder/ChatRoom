import React, { useState } from 'react';
/**@jsx jsx*/
import { jsx } from '@emotion/core';
import { Col, Row } from 'react-bootstrap';

interface Props {
  content: string;
  user: string;
  date: string;
}

export const MessageRead: React.FC<Props> = ({ content, user, date }) => {
  //Boolean who said if the message is send or receive !
  const [send] = useState(true);
  return (
    <Row className="justify-content-center">
      <Col xs={10} className="border border-danger mt-2">
        <Row>
          <Col xs={2} className={send ? 'order-1' : 'order-2'}>
            {user}
          </Col>
          <Col xs={8} className="order-1">
            <Row>
              <Col xs={12}>{content}</Col>
              <Col xs={12}>Write at {date} </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MessageRead;
