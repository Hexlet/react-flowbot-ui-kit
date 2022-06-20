import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BotMessage = ({ messageData }) => (
  <Row>
    <Col md={8}>{messageData.content}</Col>
  </Row>
);

export default BotMessage;
