import React from 'react';
import { Row, Col } from 'react-bootstrap';

const UserMessage = ({ messageData }) => (
  <Row>
    <Col className="text-end" md={{ span: 8, offset: 4 }}>{messageData.content}</Col>
  </Row>
);

export default UserMessage;
